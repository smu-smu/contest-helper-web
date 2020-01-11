import { useDispatch } from "react-redux";
import { request } from "../../modules/signUp";
import { SignUpForm } from "../../api";
import { useCallback } from "react";

export default function useSignUpActions() {
  const dispatch = useDispatch();
  const requestSignup = useCallback(
    (signUpForm: SignUpForm) => dispatch(request(signUpForm)),
    [dispatch]
  );
  return { requestSignup };
}