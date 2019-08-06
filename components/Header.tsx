import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  height: 50px;
`;

const Bar = styled.div``;

const Search = styled.div``;

const Logo = styled.h1`
  color: #4b8aff;
  font-size: 25px;
  font-weight: 700;
  line-height: 5rem;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Bar />
      <Logo>Siders</Logo>
      <Search />
    </HeaderWrap>
  );
};

export default Header;
