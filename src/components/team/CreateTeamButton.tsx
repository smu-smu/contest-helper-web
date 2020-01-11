import React from 'react';
import useUser from '../../hooks/user/useUser';
import { useTeam } from '../../hooks/team/useTeam';
import { useHistory } from 'react-router-dom';
import { RouterUtils } from '../../utils/constants';
import { Button } from 'antd';

interface ICreateTeamButtonProps {
  contestId: string | null;
}

export default function CreateTeamButton({ contestId }: ICreateTeamButtonProps) {
  const user = useUser();
  const team = useTeam();
  const history = useHistory();

  const handleCreateTeam = () => {
    if (contestId) {
      history.push(RouterUtils.createTeam(contestId));
    }
  };

  const showCreateButton = user.status === "authorized"
    && team.status === "finished"
    && team.data.find((e) => e.createdUserId === user.data.id) == null;

  return (
    <React.Fragment>
      { showCreateButton && <Button onClick={ handleCreateTeam }>팀 생성</Button> }
    </React.Fragment>
  );
}
