import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchRequested } from "../../modules/team";

export default function useTeamActions() {
  const dispatch = useDispatch();
  const fetchRequest = useCallback(
    (contestId: string) => {
      dispatch(fetchRequested(contestId));
    }, [dispatch]);
  return { fetchRequest };
}