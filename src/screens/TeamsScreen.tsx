import React, { useEffect } from 'react';
import useTeamActions from '../hooks/team/useTeamActions';
import TeamList from '../components/team/TeamList';
import useQuery from '../hooks/useQuery';
import CreateTeamButton from '../components/team/CreateTeamButton';

export default function TeamsScreen() {
  const { fetchRequest } = useTeamActions();
  const query = useQuery();
  const contestId = query.get("contest");

  useEffect(() => {
    if (contestId) {
      fetchRequest(contestId);
    }
  });

  return (
    <React.Fragment>
      <CreateTeamButton contestId={ contestId } />
      <TeamList />
    </React.Fragment>
  );
}
