import React from 'react';
import coverNotFoundImage from '../images/cover_not_found.jpeg';

const Book = ({ book }) => {
  const { title, author, edition_count, first_publish_year, cover_id } = book;
  const coverUrl = cover_id ? `http://covers.openlibrary.org/b/id/${cover_id}-M.jpg` : coverNotFoundImage;

  return (
    <article>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Edition Count: {edition_count}</p>
      <p>First Publish Year: {first_publish_year}</p>
      {cover_id ? <img src={coverUrl} alt={title} /> : <img src={coverNotFoundImage} alt="Cover Not Found" />}
    </article>
  );
};

export default Book;
