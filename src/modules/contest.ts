import { Contest } from "../api";
import { createReducer, createAction } from "@reduxjs/toolkit";
import { all, takeEvery, put } from "redux-saga/effects";

const Actions = {
  fetchRequested: 'contest/fetchRequested',
  fetchLoading: 'contest/fetchLoading',
  fetchCompleted: 'content/fetchCompleted'
};

export type ContentState =
  { status: 'loading'; } |
  { status: 'finished', data: Contest[]; };

const initialState: ContentState = { status: 'loading' };

export const fetchRequested = createAction(Actions.fetchRequested);
const fetchLoading = createAction(Actions.fetchLoading);
const fetchCompleted = createAction<Contest[]>(Actions.fetchCompleted);

export const contestReducer = createReducer<ContentState>(initialState, {
  [fetchLoading.type]: (state: ContentState, action) => {
    return { status: "loading" };
  },
  [fetchCompleted.type]: (state: ContentState, action) => {
    return { status: "finished", data: action.payload };
  }
});

function* fetchContest() {
  yield put(fetchLoading());
  yield put(fetchCompleted([
    {
      id: "test",
      title: "Hello",
      description: "World"
    }
  ] as Contest[]));
}

function* watchFetchRequested() {
  yield takeEvery(Actions.fetchRequested, fetchContest);
}

export function* contestSaga() {
  yield all([watchFetchRequested()]);
}