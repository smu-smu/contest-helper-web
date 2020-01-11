import React, { FormEvent } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import useUserActions from '../../hooks/user/useUserActions';
import { RouterPath } from '../../utils/constants';

function SignInForm({ form }: FormComponentProps) {
  const { requestSignIn } = useUserActions();
  const { getFieldDecorator } = form;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { id, password } = values;
      requestSignIn({ id: id, password: password });
    });
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Item>
        {
          getFieldDecorator('id', {
            rules: [
              { required: true, message: '아이디는 비워둘 수 없습니다' }
            ]
          })(
            <Input
              prefix={ <Icon type="user" /> }
              placeholder="아이디"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('password', {
            rules: [
              { required: true, message: '비밀번호는 비워둘 수 없습니다' }
            ]
          })(
            <Input.Password
              prefix={ <Icon type="lock" /> }
              placeholder="비밀번호"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">로그인</Button>
      </Form.Item>
      <Form.Item>
        혹은 <a href={ RouterPath.signUp }>회원가입 하기</a>
      </Form.Item>
    </Form>
  );
}

export default Form.create()(SignInForm);