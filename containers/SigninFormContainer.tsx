import React, { useCallback } from "react";
import SigninForm from "../components/SigninForm";
import { useForm } from "../lib/useForm";
import { useRouter } from "next/router";
import { useError } from "../lib/useError";
import { login } from "../firebase";

const SigninFormContainer = () => {
  const router = useRouter();
  const [formValue, onChange] = useForm({
    email: "",
    password: ""
  });
  const [error, onError, onClear] = useError(["email", "password"]);
  const { email, password } = formValue;
  const onClick = useCallback(() => {
    onClear();
    login({ email, password })
      .then(() => {
        router.push("/");
      })
      .catch((err: firebase.auth.Error) => {
        onError(err.code);
      });
  }, [formValue]);
  return (
    <SigninForm
      formValue={formValue}
      onChange={onChange}
      onClick={onClick}
      errorInfo={error}
    />
  );
};

export default SigninFormContainer;
