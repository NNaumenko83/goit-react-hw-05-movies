import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/goit-react-hw-05-movies">Home</Link>
          <Link to="/goit-react-hw-05-movies/movie">Movie</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
