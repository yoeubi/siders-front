import React, { useCallback } from "react";
import SignupForm from "../components/SignupForm";
import { useForm } from "../lib/useForm";
import { createUser } from "../firebase/index";
import { useRouter } from "next/router";
import { useError } from "../lib/useError";

const SignupFormContainer = () => {
  const router = useRouter();
  const [formValue, onChange] = useForm({
    email: "",
    password: "",
    checkPassword: ""
  });
  const [error, onError, onClear] = useError([
    "email",
    "password",
    "checkPassword"
  ]);
  const { email, password, checkPassword } = formValue;
  const onClick = useCallback(() => {
    onClear();
    if (password !== checkPassword) {
      onError("checkPassword");
      return;
    }
    createUser({ email, password })
      .then(() => {
        router.push("/");
      })
      .catch((err: firebase.auth.Error) => {
        onError(err.code);
      });
  }, [formValue]);
  return (
    <SignupForm
      formValue={formValue}
      onChange={onChange}
      onClick={onClick}
      errorInfo={error}
    />
  );
};

export default SignupFormContainer;
