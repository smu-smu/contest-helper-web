import { createAction, createReducer } from "@reduxjs/toolkit";
import { SignUpForm } from "../api";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { signUp } from "../api/User";

const Actions = {
  request: 'signUp/request',
  success: 'signUp/success',
  error: 'signUp/error'
};

export type SignUpState =
  { status: 'none', error: boolean; } |
  { status: 'success'; };

const initialState: SignUpState = { status: 'none', error: false };

export const request = createAction<SignUpForm>(Actions.request);
const success = createAction(Actions.success);
const error = createAction(Actions.error);

export const signUpReducer = createReducer<SignUpState>(initialState, {
  [success.type]: (state: SignUpState, action) => {
    return { status: 'success' };
  },
  [error.type]: (state: SignUpState, action) => {
    return { status: 'none', error: true };
  }
});

function* requestSignUp(action: any) {
  const data = yield call(signUp, action.payload as SignUpForm);
  console.log(data);
  yield put(data ? success() : error());
}

function* watchRequestSignUp() {
  yield takeEvery(Actions.request, requestSignUp);
}

export function* signUpSaga() {
  yield all([watchRequestSignUp()]);
}