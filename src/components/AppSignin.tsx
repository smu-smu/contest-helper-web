import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

export default function AppSignin() {
  const history = useHistory();

  return (
    <div>
      <Button type="primary" style={ { marginLeft: 8 } } onClick={ () => {
        history.push("/signin");
      } }>Signin</Button>
    </div>
  );
}
