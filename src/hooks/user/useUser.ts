import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

export default function useUser() {
  const user = useSelector((state: RootState) => state.user);
  return user;
}