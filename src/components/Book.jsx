import React from 'react';
import coverNotFoundImage from '../images/cover_not_found.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../services/BookmarkSlice';

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
    <article>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Edition Count: {edition_count}</p>
      <p>First Publish Year: {first_publish_year}</p>
      {cover_id ? <img src={coverUrl} alt={title} /> : <img src={coverNotFoundImage} alt="Cover Not Found" />}
      
      <button onClick={toggleBookmark}>
        {isBookmarked ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
      </button>
    </article>
  );
};

export default Book;
