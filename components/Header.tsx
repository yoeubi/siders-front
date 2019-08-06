import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: space-between;
  height: 50px;
  border-bottom: 1px solid #f0f0f0;
`;

const Icon = styled.div`
  width: 50px;
  cursor: pointer;
  padding: 15px;
`;

const Search = styled(Icon)``;

const Bar = styled(Icon)``;

const Logo = styled.h1`
  color: #4b8aff;
  font-size: 25px;
  font-weight: 700;
  line-height: 5rem;
  flex-grow: 1;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Bar>
        <img src="../static/menu.svg" alt="메뉴" />
      </Bar>
      <Logo>Siders</Logo>
      <Search>
        <img src="../static/search.svg" alt="찾기" />
      </Search>
    </HeaderWrap>
  );
};

export default Header;
