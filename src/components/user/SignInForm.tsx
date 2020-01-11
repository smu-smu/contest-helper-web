import React, { FormEvent } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import useUserActions from '../../hooks/user/useUserActions';

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
            <Input
              prefix={ <Icon type="user" /> }
              type="password"
              placeholder="비밀번호"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
      </Form.Item>
    </Form>
  );
}

export default Form.create()(SignInForm);