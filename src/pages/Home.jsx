import React from 'react';
import { Outlet } from 'react-router-dom';
import BookResults from '../components/BookResults'; // Import the BookResults component

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Outlet /> {/* This will display the content of the child route here */}
      <BookResults /> {/* Render the BookResults component here */}
    </main>
  );
}

export default Home;