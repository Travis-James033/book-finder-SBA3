import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Bookmark = () => {
  const bookmarks = useSelector(state => state.bookmark);

  return (
    <aside>
      <h3>Bookmarks</h3>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map(book => <Book key={book.id} book={book} />)
      )}
    </aside>
  );
};

export default Bookmark;
