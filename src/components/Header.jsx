import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { useGlobalContext } from '../services/context';
import bookshelfImage from '../images/Shelf.jpeg';
import '../styles/Header.css';

const Header = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();

  return (
    <header className='header'>
      <img src={bookshelfImage} alt="library" className="header-image" />
      <div className="header-content">
        <h1>Unlock the Magic of Reading</h1>
        <SearchBar setSearchTerm={setSearchTerm} setResultTitle={setResultTitle} />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
