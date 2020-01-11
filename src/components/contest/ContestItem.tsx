import React from 'react';
import { Contest } from '../../api';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouterUtils } from '../../utils/constants';

interface IContestItemProps {
  contest: Contest;
}

export default function ContestItem({ contest }: IContestItemProps) {
  const history = useHistory();

  const handleShowTeams = () => {
    history.push(RouterUtils.teams(contest.id));
  };

  return (
    <div>
      <p>name: { contest.name }</p>
      <p>group: { contest.group }</p>
      <p>startDate: { contest.startDate }</p>
      <p>endDate: { contest.endDate }</p>
      <p>Category: { contest.category }</p>
      <Button onClick={ handleShowTeams }>팀 목록</Button>
    </div>
  );
}
