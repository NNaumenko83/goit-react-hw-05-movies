import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      {' '}
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
