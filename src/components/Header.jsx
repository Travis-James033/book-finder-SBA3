import React from 'react';
import bookshelfImage from './bookshelf.jpeg';

function Header() {
  return (
    <header>
      <img src={bookshelfImage} alt="library" />
    </header>
  );
}

export default Header;
