import React from 'react';
import useUser from '../hooks/user/useUser';
import { Redirect } from 'react-router-dom';
import { RouterPath, RouterUtils } from '../utils/constants';
import { Row, Col } from 'antd';
import CreateTeamForm from '../components/team/CreateTeamForm';
import useQuery from '../hooks/useQuery';
import useCreateTeam from '../hooks/createTeam/useCreateTeam';
import ErrorMessage from '../components/ErrorMessage';

export default function CreateTeamScreen() {
  const user = useUser();
  const query = useQuery();
  const createTeam = useCreateTeam();

  if (user.status === 'unauthorized') {
    alert("로그인 후에만 이용할 수 있습니다");
    return <Redirect to={ RouterPath.root } />;
  }

  const contestId = query.get("contest");
  if (!contestId) {
    alert("대상 공모전이 지정되지 않았습니다");
    return <Redirect to={ RouterPath.root } />;
  }

  if (createTeam.status === 'success') {
    return <Redirect to={ RouterUtils.teams(contestId) } />;
  }

  return (
    <Row>
      <Col span={ 8 } />
      <Col span={ 8 } style={ { marginTop: 16 } }>
        {
          createTeam.error &&
          <ErrorMessage msg="팀 생성이 실패하였습니다" />
        }
        <CreateTeamForm contestId={ contestId } />
      </Col>
      <Col span={ 8 } />
    </Row>
  );
}
