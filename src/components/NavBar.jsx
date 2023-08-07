import React, { useState } from 'react';
import Bookmark from './Bookmark';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleBookmarkClick = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <nav className='navbar' id="navbar">
      <div className="navbar-content">
        {/* ... other navigation items */}
        <button onClick={handleBookmarkClick} className="bookmark-button">Bookmarks</button>
      </div>
      {showBookmarks && <Bookmark />}
    </nav>
  );
};

export default Navbar;
