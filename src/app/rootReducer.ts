import { combineReducers } from "@reduxjs/toolkit";
import { contestReducer } from "../modules/contest";
import { userReducer } from "../modules/user";
import { teamReducer } from "../modules/team";
import { signUpReducer } from "../modules/signUp";
import { createTeamReducer } from "../modules/createTeam";

const rootReducer = combineReducers({
  contest: contestReducer,
  user: userReducer,
  team: teamReducer,
  signUp: signUpReducer,
  createTeam: createTeamReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
