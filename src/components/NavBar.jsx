// NavBar.jsx
import React, { useState } from 'react';
import Bookmark from './Bookmark';

const Navbar = () => {
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleBookmarkClick = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <nav className='navbar' id="navbar">
      {/* ... other navigation items */}
      <button onClick={handleBookmarkClick}>Bookmarks</button>
      {showBookmarks && <Bookmark />}
    </nav>
  );
};

export default Navbar;
