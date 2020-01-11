import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../modules/user";
import { useCallback } from "react";
import { SignInForm } from "../../api";

export default function useUserActions() {
  const dispatch = useDispatch();
  const requestSignIn = useCallback(
    (signInForm: SignInForm) => {
      dispatch(signIn(signInForm));
    }, [dispatch]
  );
  const requestSignOut = useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);
  return { requestSignIn, requestSignOut };
}