import React, { useState } from 'react';
import Bookmark from './Bookmark';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleBookmarkClick = () => {
    setShowBookmarks(!showBookmarks);
  };

  const handleBookmarkClose = () => { 
    setShowBookmarks(false);
  };

  return (
    <nav className='navbar' id="navbar">
      {/* ... other navigation items */}
      <button onClick={handleBookmarkClick}>Bookmarks</button>
      {showBookmarks && <Bookmark onClose={handleBookmarkClose} />} {/* Pass the onClose function */}
    </nav>
  );
};

export default Navbar;
