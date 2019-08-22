import React from "react";
import styled from "styled-components";
import { LinkButton } from "./common/index";
import { FormValue } from "../lib/useForm";
import { ErrorInfo } from "../lib/useError";

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

const Form = styled.form`
  margin-top: 10%;
  div {
    & + div {
      margin-top: 10px;
    }
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
      font-size: 13px;
      margin: 10px 0;
      color: #ff6161;
      height: 20px;
    }
  }
`;

interface Props {
  formValue: FormValue;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorInfo: ErrorInfo;
}

const SigninForm = ({ formValue, onClick, onChange, errorInfo }: Props) => {
  const { email, password } = formValue;
  const emailError = errorInfo["email"].find(err => err.isWarning);
  const passwordError = errorInfo["password"].find(err => err.isWarning);
  return (
    <WelCome>
      <Title>
        <span>사이드 프로젝트를</span>
        <span>시작해볼까요?</span>
      </Title>
      <Form>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChange}
          />
          {emailError && <p>{emailError.message}</p>}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="6자 이상의 비밀번호를 입력해주세요."
            value={password}
            onChange={onChange}
          />
          {passwordError && <p>{passwordError.message}</p>}
        </div>
      </Form>
      <ButtonWrap>
        <LinkButton onClick={onClick}>로그인</LinkButton>
      </ButtonWrap>
    </WelCome>
  );
};

export default SigninForm;
