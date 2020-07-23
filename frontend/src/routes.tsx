import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import CreateEvent from './pages/event/CreateEvent';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterOrg from './pages/RegisterOrg';
import RegisterClt from './pages/RegisterClient';
import UpdateEvent from './pages/event/UpdateEvent';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route component = {Login} path="/" exact  />                
          <Route component={Home} path="/home"/>
          <Route component={RegisterOrg} path="/register-organizer"/>
          <Route component={RegisterClt} path="/register-client"/>
          <Route component={CreateEvent} path="/create-event" />
          <Route component={UpdateEvent} path="/update-event" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;