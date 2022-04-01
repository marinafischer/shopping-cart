import { Route, Switch } from 'react-router-dom';
import React from 'react';
import CartLess from './pages/CartLess';
import CartMore from './pages/CartMore';

const Routes = () => (
  <Switch>
    <Route exact path="/cartLess" component={ CartLess } />
    <Route exact path="/cartMore" component={ CartMore } />
  </Switch>
);

export default Routes;
