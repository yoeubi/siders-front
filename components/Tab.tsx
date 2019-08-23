import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useBodyHidden } from "../lib/useCSS";

const Modal = styled.ul`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 15px 0;
  background-color: rgba(255, 255, 255, 0.7);
`;

interface Props {
  onClick: () => void;
}

const Tab = ({ onClick }: Props) => {
  useBodyHidden();
  return (
    <Modal onClick={onClick}>
      <li>
        <Link>
          <a href="/">유저정보</a>
        </Link>
      </li>
      <li>
        <Link>
          <a href="/signup">로그인/회원가입</a>
        </Link>
      </li>
      <li>
        <Link>
          <a href="/">로그아웃</a>
        </Link>
      </li>
      <li>
        <Link>
          <a href="/">모집하기</a>
        </Link>
      </li>
    </Modal>
  );
};

export default Tab;
