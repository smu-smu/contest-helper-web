import React from 'react';
import './App.css';
import { Layout } from 'antd';
import AppHeader from '../components/AppHeader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppSignin from '../components/AppSignin';
import SignInScreen from '../screens/SignInScreen';

const { Header, Content } = Layout;

const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Header style={ { backgroundColor: "#fff" } }>
          <AppHeader />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <AppSignin />
            </Route>
            <Route path="/signin">
              <SignInScreen />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router >
  );
};

export default App;
