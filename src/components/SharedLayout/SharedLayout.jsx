import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Bars } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/goit-react-hw-05-movies">Home</Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </header>
      <Suspense
        fallback={
          <Bars
            height="40"
            width="40"
            color="#280232"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
