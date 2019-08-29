import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useBodyHidden } from "../lib/useCSS";

const List = styled.ul`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 15px 0;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Item = styled.li`
  padding: 0 15px;
`;

interface Props {
  onClick: () => void;
}

const Tab = ({ onClick }: Props) => {
  useBodyHidden();
  return (
    <List onClick={onClick}>
      <Item>
        <Link href="/">
          <a>유저정보</a>
        </Link>
      </Item>
      <Item>
        <Link href="/signup">
          <a>로그인/회원가입</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>로그아웃</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>모집하기</a>
        </Link>
      </Item>
    </List>
  );
};

export default Tab;
