import { useReducer } from "react";

interface Error {
  type: string;
  message: string;
  isWarning: boolean;
}

export interface ErrorInfo {
  [x: string]: Error[];
}

type ErrorReducer = [ErrorInfo, (errType: string) => void, () => void];

type Condition = (type: string, action: string) => boolean;

const ERRORTYPES: ErrorInfo = {
  email: [
    {
      type: "auth/email-already-in-use",
      message: "이미 사용된 이메일입니다. 다른 이메일을 입력해주세요.",
      isWarning: false
    },
    {
      type: "auth/invalid-email",
      message: "유효하지 않는 이메일입니다. 다시 입력해주세요.",
      isWarning: false
    }
  ],
  password: [
    {
      type: "auth/weak-password",
      message: "비밀번호는 최소 6자 이상입니다. 다시 입력해주세요.",
      isWarning: false
    }
  ],
  checkPassword: [
    {
      type: "checkPassword",
      message: "비밀번호가 일치하지 않습니다. 다시 시도해주세요.",
      isWarning: false
    }
  ]
};

function setValue(state: ErrorInfo, action?: string, contidion?: Condition) {
  return Object.keys(state).reduce((prev: ErrorInfo, target) => {
    prev[target] = state[target].map(err => {
      err.isWarning = false;
      if (contidion && action && contidion(err.type, action)) {
        err.isWarning = true;
      }
      return err;
    });
    return prev;
  }, {});
}

function errorReducer(state: ErrorInfo, action: string) {
  if (action.length === 0) {
    return setValue(state);
  }
  return setValue(state, action, (type, action) => type === action);
}

export function useError(errTypes: string[]): ErrorReducer {
  const initialError: ErrorInfo = errTypes.reduce((prev: ErrorInfo, type) => {
    prev[type] = ERRORTYPES[type];
    return prev;
  }, {});
  const [state, dispatch] = useReducer(errorReducer, initialError);
  const onError = (errType: string) => {
    dispatch(errType);
  };
  const onClear = () => {
    dispatch("");
  };
  return [state, onError, onClear];
}
