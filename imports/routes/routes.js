import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import Signup from '../ui/components/Signup';
import Dashboard from '../ui/components/Dashboard';
import Login from '../ui/components/Login';
import NotFound from '../ui/components/NotFound';
import history from '../ui/components/history';

const authenticatedPages = ['/dashboard'];
const unAuthenticatedPages = ['/', '/signup'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  console.log('pathname', pathname);
  console.log('isAuthenticated', isAuthenticated);
  const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  if (isUnAuthenticatedPage && isAuthenticated) {
    history.push('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
