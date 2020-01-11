import React from 'react';
import { PageHeader, Button, Avatar } from 'antd';
import useUser from '../hooks/user/useUser';
import { useHistory } from 'react-router-dom';
import useUserActions from '../hooks/user/useUserActions';
import { RouterPath } from '../utils/constants';

export default function AppHeader() {
  const user = useUser();
  const history = useHistory();
  const { requestSignOut } = useUserActions();

  let extras;
  if (user.status === "unauthorized") {
    extras = [
      <Button key="signIn" type="primary" onClick={ () => {
        history.push(RouterPath.signIn);
      } }>로그인</Button>
    ];
  } else {
    extras = [
      <Avatar key="avatar">T</Avatar>,
      <Button key="signOut" type="primary" onClick={ () => {
        history.push(RouterPath.root);
        requestSignOut();
      } }>로그아웃</Button>
    ];
  }

  return (
    <PageHeader
      title="Contest Helper"
      extra={ extras } />
  );
}
