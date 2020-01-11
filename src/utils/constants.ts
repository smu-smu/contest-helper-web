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

export const webPushPairCert = "BHIUeY6TUDIOLO51cODMgcNz1ZZzzzNmDQ95x3C37O4aW_yqlR317V1NCuc8L58U9xuTF1rFG4mTmov7fSV4CDo";