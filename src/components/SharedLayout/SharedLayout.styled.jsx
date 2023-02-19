import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: start;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  background-color: white;
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.75);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Container = styled.div`
  padding: 50px 30px 30px;
`;
