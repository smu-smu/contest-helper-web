import { Team, ResponseWrapper, RegisterTeamForm } from "../api";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { getTeams, registerTeam, permitRegister as reqPermitRegister, rejectRegister as reqRejectRegister } from "../api/Team";

const Actions = {
  fetchRequested: 'team/fetchRequested',
  fetchLoading: 'team/fetchLoading',
  fetchCompleted: 'team/fetchCompleted',
  registerRequest: 'team/registerRequest',
  permitRegister: 'team/permitRegister',
  rejectRegister: 'team/rejectRegister'
};

export type TeamState =
  { status: 'loading'; } |
  { status: 'finished', data: Team[]; };

const initialState: TeamState = { status: 'loading' };

export const fetchRequested = createAction<string>(Actions.fetchRequested);
const fetchLoading = createAction(Actions.fetchLoading);
const fetchCompleted = createAction<Team[]>(Actions.fetchCompleted);
export const registerRequest = createAction<RegisterTeamForm>(Actions.registerRequest);
export const permitRegister = createAction<RegisterTeamForm>(Actions.permitRegister);
export const rejectRegister = createAction<RegisterTeamForm>(Actions.rejectRegister);

export const teamReducer = createReducer<TeamState>(initialState, {
  [fetchLoading.type]: (state: TeamState, action) => {
    return { status: "loading" };
  },
  [fetchCompleted.type]: (state: TeamState, action) => {
    return { status: "finished", data: action.payload };
  },
});

function* fetchTeam(action: any) {
  yield put(fetchLoading());
  const contestId = action.payload as string;
  const response: ResponseWrapper<Team[]> = yield call(getTeams, contestId);
  if (response.status === 'success' && response.data) {
    yield put(fetchCompleted(response.data));
  }
}

function* registerRequested(action: any) {
  const form = action.payload as RegisterTeamForm;
  const data = yield call(registerTeam, form);
  yield put(fetchRequested(form.contestId));
}

function* permitRegistered(action: any) {
  const form = action.payload as RegisterTeamForm;
  const data = yield call(reqPermitRegister, form);
  yield put(fetchRequested(form.contestId));
}

function* rejectRegistered(action: any) {
  const form = action.payload as RegisterTeamForm;
  const data = yield call(reqRejectRegister, form);
  yield put(fetchRequested(form.contestId));
}

export function* watchRequests() {
  yield takeEvery(Actions.fetchRequested, fetchTeam);
  yield takeEvery(Actions.registerRequest, registerRequested);
  yield takeEvery(Actions.permitRegister, permitRegistered);
  yield takeEvery(Actions.rejectRegister, rejectRegistered);
}

export function* teamSaga() {
  yield all([watchRequests()]);
}