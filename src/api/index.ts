export interface Contest {
  id: string;
  title: string;
  description: string;
}

export interface User {
  username: string;
}

export interface Team {
  id: string;
  users: string[];
  name: string;
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
}