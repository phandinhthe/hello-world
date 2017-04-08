import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './Welcome'
import Clock from './Clock'
import Toggle from './Toggle'
import Greeting from './Greeting'
import NameForm from './NameForm'

import './index.css';

const user = {
  firstName: 'The',
  lastName: 'Phan'
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <Welcome user={user} />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Greeting isLoggedIn={true}/>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
)
