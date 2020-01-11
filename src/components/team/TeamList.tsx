import React from 'react';
import { useTeam } from '../../hooks/team/useTeam';
import { Spin, Empty } from 'antd';
import TeamItem from './TeamItem';

export default function TeamList() {
  const teamState = useTeam();

  if (teamState.status === 'loading') return <Spin />;

  if (teamState.data.length === 0) return <Empty />;

  return (
    <React.Fragment>
      {
        teamState.data.map((team) =>
          <TeamItem key={ team.id } team={ team } />
        )
      }
    </React.Fragment>
  );
}
