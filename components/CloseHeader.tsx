import React from "react";
import styled from "styled-components";
import { Icon, CommonHeader } from "./common/index";
import Link from "next/link";

const Header = styled(CommonHeader)``;

const Close = styled(Icon)`
  float: right;
`;

const CloseHeader = () => {
  return (
    <Header>
      <Link href="/">
        <Close>
          <img src="../static/close.svg" alt="닫기 버튼" />
        </Close>
      </Link>
    </Header>
  );
};

export default CloseHeader;
