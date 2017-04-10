import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = function() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
        </div>
      </BrowserRouter>
  )

}



export default Routes;
