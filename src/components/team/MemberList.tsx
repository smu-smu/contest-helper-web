import React from 'react';
import MemberItem from './MemberItem';

interface IMemberListProps {
  members: string[];
  isPending?: boolean;
  isSupervisor?: boolean;
  onPermitRegister: (userId: string) => void;
  onRejectRegister: (userId: string) => void;
}

export default function MemberList({ members, isPending = false, isSupervisor = false, onPermitRegister, onRejectRegister }: IMemberListProps) {
  return (
    <React.Fragment>
      {
        members.map(
          (member) => <MemberItem
            key={ member }
            member={ member }
            isPending={ isPending }
            isSupervisor={ isSupervisor }
            onPermitRegister={ onPermitRegister }
            onRejectRegister={ onRejectRegister }
          />
        )
      }
    </React.Fragment>
  );
}
