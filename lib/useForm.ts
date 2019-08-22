import { useReducer } from "react";

export interface FormValue {
  [x: string]: string;
}

type Action = EventTarget & HTMLInputElement;

type FormReducer = [
  FormValue,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

function formReducer(state: FormValue, action: Action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export function useForm(initialForm: FormValue): FormReducer {
  const [state, dispatch] = useReducer(formReducer, initialForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
