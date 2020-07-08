import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreateEvent from './pages/event/CreateEvent';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={CreateEvent} path="/create-event" exact />
    </BrowserRouter>
  );
}

export default Routes;