import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar'; // Adjust the import path
import { useGlobalContext } from '../services/context';
import bookshelfImage from '../images/Shelf.jpeg';

const Header = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();

  return (
    <header className='header'>
      <h1>Header</h1>
      <SearchBar setSearchTerm={setSearchTerm} setResultTitle={setResultTitle} />
      <Navbar /> {/* Include the Navbar component */}
      <img src={bookshelfImage} alt="library" />
    </header>
  );
};

export default Header;
