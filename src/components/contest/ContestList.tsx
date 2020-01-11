import React from 'react';
import { Spin, Empty } from 'antd';
import ContestItem from './ContestItem';
import useContest from '../../hooks/contest/useContest';
import useUser from '../../hooks/user/useUser';

export default function ContestList() {
  const userState = useUser();
  const contestState = useContest();

  if (contestState.status === 'loading') return <Spin />;

  if (contestState.data.length === 0) return <Empty />;

  return (
    <div>
      {
        contestState.data.map((contest) =>
          <ContestItem
            key={ contest.id }
            contest={ contest }
            visibleAddTeam={ userState.status === 'authorized' } />)
      }
    </div>
  );
}
