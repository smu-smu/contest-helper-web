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

  return (
    <Row>
      <Col span={ 8 } />
      <Col span={ 8 } style={ { marginTop: 16 } }>
        {
          user.status === 'unauthorized' && user.error &&
          <ErrorMessage msg="로그인에 실패하였습니다" />
        }
        {
          query.get("signUpSuccess") &&
          <SuccessMessage msg="회원가입에 성공하였습니다" />
        }
        <SignInForm />
      </Col>
      <Col span={ 8 } />
    </Row>
  );
}
