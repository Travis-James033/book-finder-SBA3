// Import necessary modules and hooks from 'react'
import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// Define the URL for the OpenLibrary API
const URL = "http://openlibrary.org/search.json?title=";

// Create a new context object to hold the app state
const AppContext = React.createContext();

// Define the component that will provide the app state to its children
const AppProvider = ({ children }) => {
    // Define the app state variables and functions using the useState hook
    const [searchTerm, setSearchTerm] = useState(""); // State for storing the search term
    const [books, setBooks] = useState([]); // State for storing the fetched books
    const [loading, setLoading] = useState(true); // State to indicate if data is loading
    const [resultTitle, setResultTitle] = useState(""); // State for displaying search result title

    // Define the function to fetch books from the OpenLibrary API using the useCallback hook
    const fetchBooks = useCallback(async () => {
        setLoading(true); // Set loading state to true when starting the fetch
        try {
            const response = await fetch(`${URL}${searchTerm}`); // Fetch data from the API
            const data = await response.json(); // Convert the response to JSON format
            const { docs } = data; // Destructure the 'docs' property from the response data

            if (docs) {
                // If data exists in 'docs', map it to the required book object format
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i, // Add cover_i to the book object
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    };
                });

                setBooks(newBooks); // Set the newBooks array as the value for 'books' state

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!");
                }
            } else {
                // If data doesn't exist, reset the 'books' state and display appropriate message
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false); // Set loading state to false after fetching and processing data
        } catch (error) {
            console.log(error); // Log any errors that occur during the fetch
            setLoading(false); // Set loading state to false in case of errors
        }
    }, [searchTerm]);

    // Fetch books from the OpenLibrary API when the search term changes
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    // Provide the app state to the children components using the AppContext.Provider
    return (
        <AppContext.Provider value={{
            loading, // Expose the loading state to children components
            books, // Expose the books state to children components
            setSearchTerm, // Expose the setSearchTerm function to children components
            resultTitle, // Expose the resultTitle state to children components
            setResultTitle, // Expose the setResultTitle function to children components
        }}>
            {children} {/* Render the children components within the AppContext.Provider */}
        </AppContext.Provider>
    );
}

// Define a custom hook 'useGlobalContext' to access the app state from any component
export const useGlobalContext = () => {
    return useContext(AppContext);
}

// Export the context object 'AppContext' and provider component 'AppProvider'
export { AppContext, AppProvider };
