import React from "react";
import styled from "styled-components";
import { Button } from "./common/index";

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

const FormWrap = styled.form`
  margin-top: 10%;
  label {
    display: block;
    font-size: 13px;
  }
  input {
    width: 100%;
    height: 36px;
    font-size: 15px;
    border-bottom: 1px solid #eaeaea;
    outline: none;
  }
  p {
    /* visibility: hidden; */
    font-size: 13px;
    margin: 10px 0;
    color: #ff6161;
  }
`;

const Form = () => {
  return (
    <WelCome>
      <Title>
        <span>필수 정보를</span>
        <span>입력해주세요.</span>
      </Title>
      <FormWrap>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력해주세요." />
          <p>이메일이 존재합니다.</p>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <p />
        </div>
        <div>
          <label htmlFor="checkPassword">비밀번호 확인</label>
          <input
            type="password"
            id="checkPassword"
            placeholder="비밀번호를 확인해주세요."
          />
          <p>비밀번호가 다릅니다</p>
        </div>
      </FormWrap>
      <ButtonWrap>
        <Button>가입 완료</Button>
      </ButtonWrap>
    </WelCome>
  );
};

export default Form;
