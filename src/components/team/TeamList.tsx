import React from 'react';
import { useTeam } from '../../hooks/team/useTeam';
import { Spin, Empty, List } from 'antd';
import TeamItem from './TeamItem';
import useUser from '../../hooks/user/useUser';

export default function TeamList() {
  const user = useUser();
  const teamState = useTeam();

  if (teamState.status === 'loading') return <Spin />;

  if (teamState.data.length === 0) return <Empty />;

  return (
    <List
      itemLayout="horizontal"
      dataSource={ teamState.data }
      renderItem={ item =>
        <TeamItem team={ item } user={ user.status === "authorized" ? user.data : null } />
      }>
    </List>
  );
}
