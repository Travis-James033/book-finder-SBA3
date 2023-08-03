import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BookmarksProvider } from './contexts/bookmarks-context';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <BookmarksProvider>
      <Home />
    </BookmarksProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
