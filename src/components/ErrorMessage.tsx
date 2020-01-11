import React from 'react';
import { Alert } from 'antd';

interface IErrorMessageProps {
  msg: string;
}

export default function ErrorMessage({ msg }: IErrorMessageProps) {
  return (
    <Alert
      showIcon
      message={ msg }
      type="error"
      banner
    />
  );
}
