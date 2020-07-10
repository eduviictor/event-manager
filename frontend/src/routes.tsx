import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreateEvent from './pages/event/CreateEvent';
import Home from './pages/Home';
import UpdateEvent from './pages/event/UpdateEvent';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateEvent} path="/create-event" />
      <Route component={UpdateEvent} path="/update-event" />
    </BrowserRouter>
  );
}

export default Routes;