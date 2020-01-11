import { User, SignInForm } from "../api";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { takeEvery, all, put } from "redux-saga/effects";

const Actions = {
  signIn: 'user/signIn',
  signInCompleted: 'user/signInCompleted',
  signInError: 'user/signInError'
};

export type UserState =
  { status: 'unauthorized'; error: boolean; } |
  { status: 'authorized', data: User; };

const initialState: UserState = { status: 'unauthorized', error: false };

export const signIn = createAction<SignInForm>(Actions.signIn);
const signInCompleted = createAction<User>(Actions.signInCompleted);
const signInError = createAction(Actions.signInError);

export const userReducer = createReducer<UserState>(initialState, {
  [signInCompleted.type]: (state: UserState, action) => {
    return { status: "authorized", data: action.payload };
  },
  [signInError.type]: (state: UserState, action) => {
    return { status: "unauthorized", error: true };
  }
});

function* requestSignIn(action: any) {
  const { id, password } = (action.payload as SignInForm);
  yield put(signInCompleted({ username: `${id}, ${password}` }));
}

export function* watchRequestSignIn() {
  yield takeEvery(Actions.signIn, requestSignIn);
}

export function* userSaga() {
  yield all([watchRequestSignIn()]);
}