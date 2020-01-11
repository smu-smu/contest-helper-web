import React from 'react';
import './App.css';
import { Layout } from 'antd';
import AppHeader from '../components/AppHeader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInScreen from '../screens/SignInScreen';
import ContestScreen from '../screens/ContestScreen';
import TeamsScreen from '../screens/TeamsScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { RouterPath } from "../utils/constants";
import CreateTeamScreen from '../screens/CreateTeamScreen';

const { Header, Content } = Layout;

const App: React.FC = () => {

  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <Layout>
        <Header style={ { backgroundColor: "#f5f5f5" } }>
          <AppHeader />
        </Header>
        <Content>
          <Switch>
            <Route exact path={ RouterPath.root }>
              <ContestScreen />
            </Route>
            <Route path={ RouterPath.signIn }>
              <SignInScreen />
            </Route>
            <Route path={ RouterPath.signUp }>
              <SignUpScreen />
            </Route>
            <Route path={ RouterPath.teams }>
              <TeamsScreen />
            </Route>
            <Route path={ RouterPath.createTeam }>
              <CreateTeamScreen />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
