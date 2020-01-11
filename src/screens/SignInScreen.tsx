import React from 'react';
import { Row, Col } from 'antd';
import SignInForm from '../components/user/SignInForm';
import useUser from '../hooks/user/useUser';
import { Redirect } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import { RouterPath } from '../utils/constants';
import useQuery from '../hooks/useQuery';
import SuccessMessage from '../components/SuccessMessage';

export default function SignInScreen() {
  const user = useUser();
  const query = useQuery();

  if (user.status === 'authorized') {
    return <Redirect to={ RouterPath.root } />;
  }

  let msg = null;
  if (user.status === 'unauthorized' && user.error) {
    msg = <ErrorMessage msg="로그인에 실패하였습니다" />;
  } else if (query.get("signUpSuccess")) {
    msg = <SuccessMessage msg="회원가입에 성공하였습니다" />;
  }

  return (
    <Row>
      <Col span={ 8 } />
      <Col span={ 8 } style={ { marginTop: 16 } }>
        { msg && msg }
        <SignInForm />
      </Col>
      <Col span={ 8 } />
    </Row>
  );
}
