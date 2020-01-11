import { combineReducers } from "@reduxjs/toolkit";
import { contestReducer } from "../modules/contest";
import { userReducer } from "../modules/user";

const rootReducer = combineReducers({
  contest: contestReducer,
  user: userReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
