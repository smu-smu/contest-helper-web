import React from 'react';
import SignUpForm from '../components/user/SignUpForm';
import { Row, Col } from 'antd';
import useSignUp from '../hooks/signUp/useSignUp';
import { Redirect } from 'react-router-dom';
import { RouterUtils } from '../utils/constants';
import ErrorMessage from '../components/ErrorMessage';

export default function SignUpScreen() {
  const signUpState = useSignUp();

  if (signUpState.status === 'success')
    return <Redirect to={ RouterUtils.signIn(true) } />;

  return (
    <Row>
      <Col span={ 8 } />
      <Col span={ 8 } style={ { marginTop: 16 } }>
        {
          signUpState.error &&
          <ErrorMessage msg="회원가입이 실패하였습니다" />
        }
        <SignUpForm />
      </Col>
      <Col span={ 8 } />
    </Row>
  );
}
