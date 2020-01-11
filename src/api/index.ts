export const baseUrl = "http://117.16.45.78:48080";

export const ResponseStatus = {
  ok: 200,
  error: 400
};

export interface Contest {
  id: string;
  name: string;
  category: string[];
  group: string;
  startDate: string;
  endDate: string;
}

export interface User {
  id: string;
  username: string;
}

export interface Team {
  id: string;
  users: string[];
  name: string;
  contact: string;
  createdUserId: string;
  contestId: string;
  pendingUsers: string[];
}

export interface SignInForm {
  id: string;
  password: string;
}

export interface SignUpForm {
  id: string;
  password: string;
  username: string;
}

export interface CreateTeamForm {
  name: string;
  contact: string;
  contestId: string;
  userId: string;
}

export interface RegisterTeamForm {
  teamId: string;
  userId: string;
  contestId: string;
}

export interface ResponseWrapper<T> {
  status: "error" | "success";
  data: T | null;
}