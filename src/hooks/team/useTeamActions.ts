import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchRequested, registerRequest, permitRegister, rejectRegister } from "../../modules/team";
import { RegisterTeamForm } from "../../api";

export default function useTeamActions() {
  const dispatch = useDispatch();
  const fetchRequest = useCallback(
    (contestId: string) => {
      dispatch(fetchRequested(contestId));
    }, [dispatch]);
  const registerTeamRequest = useCallback(
    (form: RegisterTeamForm) => {
      dispatch(registerRequest(form));
    }, [dispatch]
  );
  const permitRegisterRequest = useCallback(
    (form: RegisterTeamForm) => {
      dispatch(permitRegister(form));
    }, [dispatch]
  );
  const rejectRegisterRequest = useCallback(
    (form: RegisterTeamForm) => {
      dispatch(rejectRegister(form));
    }, [dispatch]
  );
  return {
    fetchRequest, registerTeamRequest, permitRegisterRequest, rejectRegisterRequest
  };
}