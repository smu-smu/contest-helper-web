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
import firebase from 'firebase';
import { requestNotificationPermission, saveTokenToLocal } from '../utils/notification';

const { Header, Content } = Layout;

firebase.initializeApp({
  apiKey: "AIzaSyCYHsBGxW8cH7Sqi94hqT2OhgYSSzP6J9E",
  authDomain: "contest-helper-d570a.firebaseapp.com",
  databaseURL: "https://contest-helper-d570a.firebaseio.com",
  projectId: "contest-helper-d570a",
  storageBucket: "contest-helper-d570a.appspot.com",
  messagingSenderId: "28027376772",
  appId: "1:28027376772:web:78fb55a0e797092f60ded1",
  measurementId: "G-KH6NGCW6E5"
});

const messaging = firebase.messaging();

requestNotificationPermission(() => {
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      saveTokenToLocal(currentToken);
    }
  });

});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      saveTokenToLocal(currentToken);
    }
  });
});

messaging.onMessage((payload) => {
  console.log(payload);
  new Notification("Hello Notification");
});

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
