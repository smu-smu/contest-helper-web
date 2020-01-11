export const RouterPath = {
  root: "/",
  signIn: "/signIn",
  signUp: "/signUp",
  teams: "/teams",
  createTeam: "/createTeam"
};

export const RouterUtils = {
  teams: (contestId: string) => `${RouterPath.teams}?contest=${contestId}`,
  createTeam: (contestId: string) => `${RouterPath.createTeam}?contest=${contestId}`,
  signIn: (signUpSuccess: boolean) => `${RouterPath.signIn}?signUpSuccess=${signUpSuccess}`
};