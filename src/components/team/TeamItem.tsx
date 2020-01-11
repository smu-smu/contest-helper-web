import React from 'react';
import { Team } from '../../api';
import MemberList from './MemberList';

interface ITeamITemProps {
  team: Team;
}

export default function TeamItem({ team }: ITeamITemProps) {
  return (
    <div>
      <p>{ team.name }</p>
      <MemberList members={ team.users } />
    </div>
  );
}
