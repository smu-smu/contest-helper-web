import React from 'react';
import { Button } from 'antd';

interface IMemberItemProps {
  member: string;
  isPending?: boolean;
  isSupervisor?: boolean;
  onPermitRegister: (userId: string) => void;
  onRejectRegister: (userId: string) => void;
}

export default function MemberItem({ member, isPending, isSupervisor, onPermitRegister, onRejectRegister }: IMemberItemProps) {
  return (
    <div>
      <p>Member: { member }</p>
      {
        isPending && isSupervisor &&
        <React.Fragment>
          <Button onClick={ () => onPermitRegister(member) }>승인</Button>
          <Button onClick={ () => onRejectRegister(member) }>거부</Button>
        </React.Fragment>
      }
    </div>
  );
}
