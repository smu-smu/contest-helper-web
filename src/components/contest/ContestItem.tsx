import React from 'react';
import { Contest } from '../../api';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { RouterUtils } from '../../utils/constants';

interface IContestItemProps {
  contest: Contest;
  visibleAddTeam: boolean;
}

export default function ContestItem({ contest, visibleAddTeam }: IContestItemProps) {
  const history = useHistory();

  const handleCreateTeam = () => {
    history.push(RouterUtils.createTeam(contest.id));
  };

  const handleShowTeams = () => {
    history.push(RouterUtils.teams(contest.id));
  };

  return (
    <div>
      <p>{ contest.title }</p>
      <p>{ contest.description }</p>
      {
        visibleAddTeam && <Button onClick={ handleCreateTeam }>팀 생성</Button>
      }
      <Button onClick={ handleShowTeams }>팀 목록</Button>
    </div>
  );
}
