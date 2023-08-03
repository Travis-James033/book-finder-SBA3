import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Home from './Home';
import BookResults from './BookResults';
import BookInfo from './BookInfo';
import Bookmarks from './Bookmarks';
import Header from './Header';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<BookResults />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
