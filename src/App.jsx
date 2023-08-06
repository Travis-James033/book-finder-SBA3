import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { AppProvider } from './services/context';

function App() {
  return (
    <Router>
      <AppProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;