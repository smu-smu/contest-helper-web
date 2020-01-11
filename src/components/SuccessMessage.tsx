import React from 'react';
import { Alert } from 'antd';

interface ISuccessMessageProps {
  msg: string;
}

export default function SuccessMessage({ msg }: ISuccessMessageProps) {
  return (
    <Alert
      showIcon
      message={ msg }
      type="success"
      banner
    />
  );
}
