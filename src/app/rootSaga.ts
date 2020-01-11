import { all } from "redux-saga/effects";
import { contestSaga } from "../modules/contest";
import { userSaga } from "../modules/user";
import { teamSaga } from "../modules/team";
import { signUpSaga } from "../modules/signUp";
import { createTeamSaga } from "../modules/createTeam";

export default function* rootSaga() {
  yield all([
    contestSaga(),
    userSaga(),
    teamSaga(),
    signUpSaga(),
    createTeamSaga()
  ]);
}