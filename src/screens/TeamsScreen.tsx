import React, { useEffect } from 'react';
import useTeamActions from '../hooks/team/useTeamActions';
import TeamList from '../components/team/TeamList';
import useQuery from '../hooks/useQuery';

export default function TeamsScreen() {
  const { fetchRequest } = useTeamActions();
  const query = useQuery();

  useEffect(() => {
    const contestId = query.get("contest");
    if (contestId) {
      fetchRequest(contestId);
    }
  });

  return (
    <TeamList />
  );
}
