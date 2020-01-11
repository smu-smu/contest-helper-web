import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

export default function useCreateTeam() {
  const createTeam = useSelector((state: RootState) => state.createTeam);
  return createTeam;
}