import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookResults from './components/BookResults';
import BookInfo from './components/BookInfo';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookResults />} />
        <Route path="/books/:id" element={<BookInfo />} />
        </Routes>
      </Router>
  );
}

export default App;