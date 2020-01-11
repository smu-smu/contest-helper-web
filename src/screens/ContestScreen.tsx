import React, { useEffect } from 'react';
import useContestActions from '../hooks/contest/useContestActions';
import ContestList from '../components/contest/ContestList';

export default function ContestScreen() {
  const { requestFetch } = useContestActions();

  useEffect(() => {
    requestFetch();
  });

  return (
    <ContestList />
  );
}
