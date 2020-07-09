import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreateEvent from './pages/event/CreateEvent';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateEvent} path="/create-event" />
    </BrowserRouter>
  );
}

export default Routes;