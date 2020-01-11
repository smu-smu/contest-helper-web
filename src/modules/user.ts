import { User, SignInForm } from "../api";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { takeEvery, all, put, call } from "redux-saga/effects";
import { signIn as reqSignIn } from "../api/User";
import { saveTokenToServer, loadTokenFromLocal } from "../utils/notification";

const Actions = {
  signIn: 'user/signIn',
  signOut: 'user/signOut',
  signInCompleted: 'user/signInCompleted',
  signInError: 'user/signInError'
};

export type UserState =
  { status: 'unauthorized'; error: boolean; } |
  { status: 'authorized', data: User; };

const initialState: UserState = { status: 'unauthorized', error: false };

export const signIn = createAction<SignInForm>(Actions.signIn);
export const signOut = createAction(Actions.signOut);
const signInCompleted = createAction<User>(Actions.signInCompleted);
const signInError = createAction(Actions.signInError);

export const userReducer = createReducer<UserState>(initialState, {
  [signOut.type]: (state: UserState, action) => {
    return { status: "unauthorized", error: false };
  },
  [signInCompleted.type]: (state: UserState, action) => {
    return { status: "authorized", data: action.payload };
  },
  [signInError.type]: (state: UserState, action) => {
    return { status: "unauthorized", error: true };
  }
});

function* requestSignIn(action: any) {
  const data = yield call(reqSignIn, action.payload as SignInForm);
  if (data) {
    const token = loadTokenFromLocal();
    if (token) {
      saveTokenToServer(token, data.userId);
    }
    yield put(signInCompleted({ username: data.name, id: data.userId }));
  } else {
    yield put(signInError());
  }
}

function* watchRequestSignIn() {
  yield takeEvery(Actions.signIn, requestSignIn);
}

export function* userSaga() {
  yield all([watchRequestSignIn()]);
}