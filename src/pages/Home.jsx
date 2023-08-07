import React from 'react';
import { Outlet } from 'react-router-dom';
import BookResults from '../components/BookResults';

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Outlet />
      <BookResults />
    </main>
  );
}

export default Home;
