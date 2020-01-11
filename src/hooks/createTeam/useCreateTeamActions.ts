import { useDispatch } from "react-redux";
import { request } from "../../modules/createTeam";
import { CreateTeamForm } from "../../api";
import { useCallback } from "react";

export default function useCreateTeamActions() {
  const dispatch = useDispatch();
  const requestCreateTeam = useCallback(
    (form: CreateTeamForm) => {
      dispatch(request(form));
    },
    [dispatch],
  );
  return { requestCreateTeam };
}