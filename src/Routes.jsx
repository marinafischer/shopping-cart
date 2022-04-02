import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Cart from './pages/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/cartLess" component={ Cart } />
    <Route exact path="/cartMore" component={ Cart } />
  </Switch>
);

export default Routes;
