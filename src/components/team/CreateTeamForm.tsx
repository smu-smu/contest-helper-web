import React, { FormEvent } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { FormComponentProps, FormCreateOption } from 'antd/lib/form';
import useCreateTeamActions from '../../hooks/createTeam/useCreateTeamActions';

interface ICreateTeamFormProps extends FormComponentProps {
  contestId: string;
}

function CreateTeamForm({ form, contestId }: ICreateTeamFormProps) {
  const { requestCreateTeam } = useCreateTeamActions();
  const { getFieldDecorator } = form;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { name, contact } = values;
      requestCreateTeam({ contestId: contestId, name: name, contact: contact });
    });
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Item>
        {
          getFieldDecorator('name', {
            rules: [
              { required: true, message: '팀 이름은 비워둘 수 없습니다' }
            ]
          })(
            <Input
              placeholder="팀 이름"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        {
          getFieldDecorator('contact', {
            rules: [
              { required: true, message: '연락처는 비워둘 수 없습니다' }
            ]
          })(
            <Input
              prefix={ <Icon type="contacts" /> }
              placeholder="연락처"
            />
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">팀 생성</Button>
      </Form.Item>
    </Form>
  );
}

const mapPropsToFields = (props: ICreateTeamFormProps) => {
  const { contestId } = props;
  return {
    contestId: Form.createFormField({ value: contestId })
  };
};

const FormOptions: FormCreateOption<ICreateTeamFormProps> = {
  mapPropsToFields
};

export default Form.create(FormOptions)(CreateTeamForm);