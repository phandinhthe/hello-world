import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App        from './components/App/App';
import Clock      from './components/Clock/Clock';
import Welcome    from './components/Welcome/Welcome';
import Toggle     from './components/Toggle/Toggle';
import Greeting   from './components/Greeting/Greeting';
import NameForm   from './components/Form/NameForm';
import About      from './components/About';
import NotFound   from './components/NotFound';
import ListAndKey from './components/ListAndKey/ListAndKey';

const Routes = function() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/clock">Clock</Link></li>
          <li><Link to="/welcome">Welcome</Link></li>
          <li><Link to="/toggle">Toggle</Link></li>
          <li><Link to="/greeting">Greeting</Link></li>
          <li><Link to="/nameForm">NameForm</Link></li>
          <li><Link to="/listAndKey">ListAndKey</Link></li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/clock" component={Clock}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/toggle" component={Toggle}/>
          <Route path="/greeting" component={Greeting}/>
          <Route path="/nameForm" component={NameForm}/>
          <Route path="/listAndKey" component={ListAndKey}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      </BrowserRouter>
  )

}



export default Routes;
