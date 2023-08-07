import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/Bookmark.css';

const Bookmark = ({ onClose }) => { // Receive the onClose prop
  const bookmarks = useSelector(state => state.bookmark);

  return (
    <div className="overlay">
      <div className="bookmark-container">
        <button className="close-button" onClick={onClose}>Close</button> {/* Add the close button */}
        <h3>Bookmarks</h3>
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet.</p>
        ) : (
          bookmarks.map(book => <Book key={book.id} book={book} />)
        )}
      </div>
    </div>
  );
};

export default Bookmark;
