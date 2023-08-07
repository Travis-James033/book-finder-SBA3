import React from 'react';
import coverNotFoundImage from '../images/cover_not_found.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../services/BookmarkSlice';
import '../styles/Book.css'

const Book = ({ book }) => {
  const { title, author, edition_count, first_publish_year, cover_id, id } = book;
  const coverUrl = cover_id ? `http://covers.openlibrary.org/b/id/${cover_id}-M.jpg` : coverNotFoundImage;

  const dispatch = useDispatch();
  const bookmarkedBooks = useSelector(state => state.bookmark);

  const isBookmarked = bookmarkedBooks.some(bookmark => bookmark.id === id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark({ id })); // Pass an object with 'id' property to removeBookmark
    } else {
      dispatch(addBookmark(book));
    }
  };

  return (
    <article className="book">
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">Author: {author}</p>
        <p className="book-edition-count">Edition Count: {edition_count}</p>
        <p className="book-publish-year">First Publish Year: {first_publish_year}</p>
        <button onClick={toggleBookmark} className="bookmark-button">
          {isBookmarked ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
        </button>
      </div>
      <div className="book-cover">
        {cover_id ? <img src={coverUrl} alt={title} /> : <img src={coverNotFoundImage} alt="Cover Not Found" className="cover-not-found" />}
      </div>
    </article>
  );
};

export default Book;

