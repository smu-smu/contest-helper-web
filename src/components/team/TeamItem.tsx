import React from 'react';
import { Team, User } from '../../api';
import MemberList from './MemberList';
import { Button, Card } from 'antd';
import useTeamActions from '../../hooks/team/useTeamActions';

interface ITeamITemProps {
  team: Team;
  user: User | null;
}

export default function TeamItem({ team, user }: ITeamITemProps) {
  const { registerTeamRequest, permitRegisterRequest, rejectRegisterRequest } = useTeamActions();

  const handleRegisterTeam = () => {
    if (user) {
      registerTeamRequest({ userId: user.id, teamId: team.id, contestId: team.contestId });
    }
  };

  const handlePermitRegister = (id: string) => {
    permitRegisterRequest({ userId: id, teamId: team.id, contestId: team.contestId });
  };

  const handleRejectRegister = (id: string) => {
    rejectRegisterRequest({ userId: id, teamId: team.id, contestId: team.contestId });
  };

  const isSupervisor = user && team.createdUserId === user.id;

  return (
    <Card title={ team.name }>
      <p>{ team.contact }</p>
      <p>생성한 사람: { team.createdUserId }</p>
      <MemberList members={ team.users } onPermitRegister={ (_s) => { } } onRejectRegister={ (_s) => { } } />
      {
        user && (team.users.indexOf(user.id) || !isSupervisor) &&
        <Button onClick={ handleRegisterTeam } disabled={ team.pendingUsers.indexOf(user.id) >= 0 }>가입 신청</Button>
      }
      <p>Pending</p>
      { isSupervisor && <MemberList
        members={ team.pendingUsers }
        isSupervisor
        isPending
        onPermitRegister={ handlePermitRegister }
        onRejectRegister={ handleRejectRegister } /> }
    </Card >
  );
};
