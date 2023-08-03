import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet /> {/* This will display the content of the child route here */}
    </main>
  );
};

export default Home;