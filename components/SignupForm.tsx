import React from "react";
import styled from "styled-components";
import { LinkButton } from "./common/index";
import { ErrorInfo } from "../lib/useError";
import { FormValue } from "../lib/useForm";

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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  formValue: FormValue;
  errorInfo: ErrorInfo;
}

const SignupForm = ({ onChange, onClick, formValue, errorInfo }: Props) => {
  const { email, password, checkPassword } = formValue;
  const emailError = errorInfo["email"].find(err => err.isWarning);
  const passwordError = errorInfo["password"].find(err => err.isWarning);
  const checkPasswordError = errorInfo["checkPassword"].find(
    err => err.isWarning
  );
  return (
    <WelCome>
      <Title>
        <span>필수 정보를</span>
        <span>입력해주세요.</span>
      </Title>
      <FormWrap>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            onChange={onChange}
            value={email}
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
            onChange={onChange}
            value={password}
          />
          {passwordError && <p>{passwordError.message}</p>}
        </div>
        <div>
          <label htmlFor="checkPassword">비밀번호 확인</label>
          <input
            type="password"
            id="checkPassword"
            name="checkPassword"
            placeholder="비밀번호를 확인해주세요."
            onChange={onChange}
            value={checkPassword}
          />
          {checkPasswordError && <p>{checkPasswordError.message}</p>}
        </div>
      </FormWrap>
      <ButtonWrap>
        <LinkButton onClick={onClick}>가입 완료</LinkButton>
      </ButtonWrap>
    </WelCome>
  );
};

export default SignupForm;
