import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import CreateEvent from './pages/event/CreateEvent';
import Home from './pages/Home';
import HomeClient from './pages/HomeClient';
import Login from './pages/Login';
import RegisterOrg from './pages/RegisterOrg';
import RegisterClt from './pages/RegisterClient';
import ClientUpdate from './pages/UpdateClient';
import OrganizerUpdate from './pages/UpdateOrganizer';
import UpdateEvent from './pages/event/UpdateEvent';
import CreateAttraction from './pages/attraction/CreateAttraction';
import UpdateAttraction from './pages/attraction/UpdateAttraction';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={HomeClient} path="/home-client" />        
        <Route component={RegisterOrg} path="/register-organizer" />
        <Route component={RegisterClt} path="/register-client" />
        <PrivateRoute component={ClientUpdate} path="/update-client" />   
        <PrivateRoute component={OrganizerUpdate} path="/update-organizer" />           
        <PrivateRoute component={CreateEvent} path="/create-event" />        
        <PrivateRoute component={UpdateEvent} path="/update-event" />        
        <PrivateRoute component={CreateAttraction} path="/create-attraction" />
        <PrivateRoute component={UpdateAttraction} path="/update-attraction" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
