import React from 'react';
import bookshelfImage from '../components/bookshelf.jpeg';

function Header() {
  return (
    <header>
      <img src={bookshelfImage} alt="library" />
    </header>
  );
}

export default Header;
