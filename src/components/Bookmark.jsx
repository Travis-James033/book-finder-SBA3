import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/Bookmark.css';

const Bookmark = () => {
  const bookmarks = useSelector(state => state.bookmark);

  return (
    <div className="bookmark-overlay"> {/* Add the overlay container */}
      <h3>Bookmarks</h3>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map(book => <Book key={book.id} book={book} />)
      )}
    </div>
  );
};

export default Bookmark;
