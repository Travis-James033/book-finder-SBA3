import React from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>Hello,World!</h1>
      <Outlet /> {/* This will display the content of the child route here */}
    </main>
  );
}

export default Home;