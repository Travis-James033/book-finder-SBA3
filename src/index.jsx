import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import BookResults from "./BookResults";
import BookInfo from "./BookInfo";
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="BookResults" element={<BookResults />} />
      <Route path="BookInfo" element={<BookInfo />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
