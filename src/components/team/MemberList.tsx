import React from 'react';
import MemberItem from './MemberItem';

interface IMemberListProps {
  members: string[];
}

export default function MemberList({ members }: IMemberListProps) {
  return (
    <React.Fragment>
      {
        members.map(
          (member) => <MemberItem key={ member } member={ member } />
        )
      }
    </React.Fragment>
  );
}
