import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import styled from '@emotion/styled';

const CustomLinkStyled = styled(Link)`
  color: ${props =>
    props.much || props.muchpath.pathnameBase === props.to ? 'blue' : 'black'};
  text-decoration: none;
  :hover {
    color: purple;
  }
`;

const CustomLink = ({ to, children }) => {
  const much = useMatch(to);
  const muchPath = useMatch('/goit-react-hw-05-movies/movies/*') ?? '';

  return (
    <CustomLinkStyled to={to} much={much} muchpath={muchPath}>
      {children}
    </CustomLinkStyled>
  );
};

export default CustomLink;

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};
