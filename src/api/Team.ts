import axios from "axios";
import { baseUrl, ResponseWrapper, Team, ResponseStatus, CreateTeamForm, RegisterTeamForm } from ".";

const Paths = {
  getTeams: (contestId: string) => `/team/contestId/${contestId}`,
  createTeam: '/team',
  registerTeam: '/team/request',
  premitRegister: '/team/permit',
  rejectRegister: '/team/reject'
};

export async function getTeams(contestId: string): Promise<ResponseWrapper<Team[]>> {
  const url = baseUrl + Paths.getTeams(contestId);
  try {
    const { data, status } = await axios.get(url);
    if (status === ResponseStatus.error) {
      return { status: "error", data: null };
    }

    return {
      status: "success",
      data: data.map((team: any) => {
        return {
          id: team.name,
          name: team.name,
          users: team.members,
          contact: team.address,
          createdUserId: team.createdUser,
          contestId: team.contestId,
          pendingUsers: team.participants.map((paricipant: any) => paricipant.accountId)
        } as Team;
      })
    };
  } catch (e) {
    return { status: "error", data: null };
  }
}

export async function createTeam({ name, contestId, contact, userId }: CreateTeamForm) {
  const url = baseUrl + Paths.createTeam;
  try {
    const { data, status } = await axios.post(url, {
      name,
      contestId,
      address: contact,
      createdUser: userId
    });
    return status === ResponseStatus.ok;
  } catch (e) {
    return null;
  }
}

export async function registerTeam({ userId, teamId }: RegisterTeamForm) {
  const url = baseUrl + Paths.registerTeam;
  try {
    const { data, status } = await axios.post(url, {
      accountId: userId,
      teamId
    });
    return status === ResponseStatus.ok && data !== null;
  } catch (e) {
    return false;
  }
}

export async function permitRegister({ userId, teamId }: RegisterTeamForm) {
  const url = baseUrl + Paths.premitRegister;
  try {
    const { data, status } = await axios.post(url, {
      accountId: userId,
      teamId
    });
    return status === ResponseStatus.ok && data !== null;
  } catch (e) {
    return false;
  }
}

export async function rejectRegister({ userId, teamId }: RegisterTeamForm) {
  const url = baseUrl + Paths.rejectRegister;
  try {
    const { data, status } = await axios.post(url, {
      accountId: userId,
      teamId
    });
    return status === ResponseStatus.ok && data !== null;
  } catch (e) {
    return false;
  }
}