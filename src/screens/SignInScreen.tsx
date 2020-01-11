import React from 'react';
import { Row, Col } from 'antd';
import SignInForm from '../components/user/SignInForm';

export default function SignInScreen() {
  return (
    <Row>
      <Col span={ 8 } />
      <Col span={ 8 } style={ { marginTop: 16 } }>
        <SignInForm />
      </Col>
      <Col span={ 8 } />
    </Row>
  );
}
