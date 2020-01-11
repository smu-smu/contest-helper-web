import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

export default function useSignUp() {
  const signUp = useSelector((state: RootState) => state.signUp);
  return signUp;
}