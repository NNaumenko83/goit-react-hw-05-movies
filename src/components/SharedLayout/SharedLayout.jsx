import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Bars } from 'react-loader-spinner';
import CustomLink from 'components/CustomLink';

import { Header, Nav, Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <CustomLink to="/goit-react-hw-05-movies">Home</CustomLink>
          <CustomLink to="/goit-react-hw-05-movies/movies">Movies</CustomLink>
        </Nav>
      </Header>
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
    </Container>
  );
};

export default SharedLayout;
