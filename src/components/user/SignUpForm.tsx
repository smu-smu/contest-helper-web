import React, { FormEvent } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import useSignUpActions from '../../hooks/signUp/useSignUpActions';

function SignUpForm({ form }: FormComponentProps) {
  const { requestSignup } = useSignUpActions();
  const { getFieldDecorator } = form;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { id, password, name } = values;
      requestSignup({ id: id, password: password, username: name });
    });
  };

  const compareToFirstPassword = (_rule: any, value: any, callback: any) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('비밀번호가 일치하지 않습니다');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (_rule: any, value: any, callback: any) => {
    if (value) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Item>
        {
          getFieldDecorator('name', {
            rules: [
              { required: true, message: '이름은 비워둘 수 없습니다' }
            ]
          })(
            <Input
              placeholder="이름"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('id', {
            rules: [
              { required: true, message: '아이디는 비워둘 수 없습니다' }
            ]
          })(
            <Input
              placeholder="아이디"
            />
          )
        }
      </Form.Item>
      <Form.Item hasFeedback>
        {
          getFieldDecorator('password', {
            rules: [
              { required: true, message: '비밀번호는 비워둘 수 없습니다' },
              { validator: validateToNextPassword }
            ]
          })(
            <Input.Password
              prefix={ <Icon type="lock" /> }
              placeholder="비밀번호"
            />
          )
        }
      </Form.Item>
      <Form.Item hasFeedback>
        {
          getFieldDecorator('password-recheck', {
            rules: [
              { required: true, message: '비밀번호 확인은 비워둘 수 없습니다' },
              { validator: compareToFirstPassword }
            ]
          })(
            <Input.Password
              prefix={ <Icon type="lock" /> }
              placeholder="비밀번호 확인"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">회원가입</Button>
      </Form.Item>
    </Form>
  );
}

export default Form.create()(SignUpForm);