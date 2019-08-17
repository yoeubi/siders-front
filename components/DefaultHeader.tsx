import React from "react";
import styled from "styled-components";
import { Icon, CommonHeader } from "./common";

const Header = styled(CommonHeader)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: space-between;
  border-bottom: 1px solid #f0f0f0;
  z-index: 10;
`;

const BarIcon = styled(Icon)``;

const SearchIcon = styled(Icon)``;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 4.8rem;
  flex-grow: 1;
`;

const DefaultHeader = () => {
  return (
    <Header>
      <BarIcon>
        <img src="../static/menu.svg" alt="메뉴" />
      </BarIcon>
      <Logo>Siders</Logo>
      <SearchIcon>
        <img src="../static/search.svg" alt="찾기" />
      </SearchIcon>
    </Header>
  );
};

export default DefaultHeader;
