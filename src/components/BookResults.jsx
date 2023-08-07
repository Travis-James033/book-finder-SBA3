import React from 'react';
import { useGlobalContext } from '../services/context';
import Book from './Book';
import '../styles/BookResults.css'; 

const BookResults = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <h2>{resultTitle}</h2>
      <div className="book-results"> {/* Apply the 'book-results' class */}
        {books.length === 0 ? (
          <p>No books found.</p>
        ) : (
          books.map((book) => <Book key={book.id} book={book} className="book" />)
        )}
      </div>
    </section>
  );
};

export default BookResults;