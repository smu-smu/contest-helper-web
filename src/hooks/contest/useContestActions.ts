import { useDispatch } from "react-redux";
import { fetchRequested } from "../../modules/contest";
import { useCallback } from "react";

export default function useContestActions() {
  const dispatch = useDispatch();
  const requestFetch = useCallback(
    () => {
      dispatch(fetchRequested());
    }, [dispatch],
  );
  return { requestFetch };
}