import React from 'react';
import bookshelfImage from '../images/Shelf.jpeg';

function Header() {
  return (
    <header>
      <img src={bookshelfImage} alt="library" />
    </header>
  );
}

export default Header;