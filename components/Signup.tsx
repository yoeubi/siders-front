import React from "react";
import styled from "styled-components";
import { Button } from "./common";

const WelCome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 90px);
`;

const Title = styled.h1`
  margin-top: 15%;
  font-weight: 700;
  line-height: 33px;
  font-size: 27px;
  span {
    display: block;
  }
`;

const ButtonWrap = styled.div`
  margin-top: auto;
`;

const Signup = () => {
  return (
    <WelCome>
      <Title>
        <span>사이드 프로젝트를</span>
        <span>지금 바로</span>
        <span>경험해보세요.</span>
      </Title>
      <ButtonWrap>
        <Button>회원가입</Button>
      </ButtonWrap>
    </WelCome>
  );
};

export default Signup;
