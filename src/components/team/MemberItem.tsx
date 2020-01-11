import React from 'react';

interface IMemberItemProps {
  member: string;
}

export default function MemberItem({ member }: IMemberItemProps) {
  return (
    <div>
      <p>Member: { member }</p>
    </div>
  );
}
