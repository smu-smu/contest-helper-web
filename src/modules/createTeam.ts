import { createAction, createReducer } from "@reduxjs/toolkit";
import { CreateTeamForm } from "../api";
import { put, takeEvery, all } from "redux-saga/effects";

const Actions = {
  request: 'createTeam/request',
  success: 'createTeam/success',
  error: 'createTeam/error'
};

export type CreateTeamState =
  { status: 'none', error: boolean; } |
  { status: 'success'; };

const initialState: CreateTeamState = { status: 'none', error: false };

export const request = createAction<CreateTeamForm>(Actions.request);
const success = createAction(Actions.success);
const error = createAction(Actions.error);

export const createTeamReducer = createReducer<CreateTeamState>(initialState, {
  [success.type]: (state: CreateTeamState, action) => {
    return { status: 'success' };
  },
  [error.type]: (state: CreateTeamState, action) => {
    return { status: 'none', error: true };
  }
});

function* requestCreateTeam(action: any) {
  const { name, contact } = (action.payload as CreateTeamForm);
  yield put(success());
}

function* watchRequestCreateTeam() {
  yield takeEvery(Actions.request, requestCreateTeam);
}

export function* createTeamSaga() {
  yield all([watchRequestCreateTeam()]);
}