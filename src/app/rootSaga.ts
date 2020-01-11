import { all } from "redux-saga/effects";
import { contestSaga } from "../modules/contest";
import { userSaga } from "../modules/user";

export default function* rootSaga() {
  yield all([contestSaga(), userSaga()]);
}