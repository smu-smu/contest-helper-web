import { Team } from "../api";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { put, takeEvery, all } from "redux-saga/effects";

const Actions = {
  fetchRequested: 'team/fetchRequested',
  fetchLoading: 'team/fetchLoading',
  fetchCompleted: 'team/fetchCompleted',
};

export type TeamState =
  { status: 'loading'; } |
  { status: 'finished', data: Team[]; };

const initialState: TeamState = { status: 'loading' };

export const fetchRequested = createAction<string>(Actions.fetchRequested);
const fetchLoading = createAction(Actions.fetchLoading);
const fetchCompleted = createAction<Team[]>(Actions.fetchCompleted);

export const teamReducer = createReducer<TeamState>(initialState, {
  [fetchLoading.type]: (state: TeamState, action) => {
    return { status: "loading" };
  },
  [fetchCompleted.type]: (state: TeamState, action) => {
    return { status: "finished", data: action.payload };
  }
});

function* fetchTeam(action: any) {
  const contestId = action.payload as string;
  yield put(fetchLoading());
  yield put(fetchCompleted([
    {
      name: "Test",
      users: [
        "A",
        "B"
      ]
    }
  ] as Team[]));
}

export function* watchFetchRequested() {
  yield takeEvery(Actions.fetchRequested, fetchTeam);
}

export function* teamSaga() {
  yield all([watchFetchRequested()]);
}