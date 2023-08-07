import React from 'react';
import { Outlet } from 'react-router-dom';
import BookResults from '../components/BookResults';

function Home() {
  return (
    <main>
      <Outlet />
      <BookResults />
    </main>
  );
}

export default Home;
