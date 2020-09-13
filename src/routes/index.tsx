import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import NotFound from '../pages/NotFound';
// o + no fim avisa que tudo akilo faz parte da rota
const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
