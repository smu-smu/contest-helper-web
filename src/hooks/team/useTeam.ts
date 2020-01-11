import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

export function useTeam() {
  const team = useSelector((state: RootState) => state.team);
  return team;
}