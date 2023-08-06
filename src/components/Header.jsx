import React from 'react';
import SearchBar from './SearchBar';
import { useGlobalContext } from '../services/context'; // Import the useGlobalContext hook
import bookshelfImage from '../images/Shelf.jpeg';

const Header = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext(); // Use the useGlobalContext hook to get the context values

  return (
    <header className='header'>
      <h1>Header</h1>
      <SearchBar setSearchTerm={setSearchTerm} setResultTitle={setResultTitle} /> {/* Pass the functions as props */}
      <img src={bookshelfImage} alt="library" />
    </header>
  );
};

export default Header;