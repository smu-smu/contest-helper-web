import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

export default function useContest() {
  const contest = useSelector((state: RootState) => state.contest);
  return contest;
}