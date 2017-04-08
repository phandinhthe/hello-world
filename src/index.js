'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ClockClass from './Clock'
import Toggle from './Toggle'
import Map from './map'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello {formatName(user)}</h1>;
  }

  return <h1>Hello stranger!</h1>

}

function tick() {
  const element = (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root4')
  );
}

setInterval(tick, 1000);

const user = {
  firstName: 'Phan',
  lastName: 'The'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root1')
);

ReactDOM.render(
  getGreeting(null),
  document.getElementById('root2')
);

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root3')
);

// Using Component
function Welcome(props) {
  return <h1>Hello, welcome {props.name}</h1>;
}

const welcomeElement = <Welcome name="The Phan"/>

ReactDOM.render(
  welcomeElement,
  document.getElementById('root5')
);

// State and lifecycle
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick2() {
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root6')
  )
};
setInterval(tick2, 1000);

ReactDOM.render(
  <ClockClass />,
  document.getElementById('root7')
)

// Handling Event
ReactDOM.render(
  <Toggle />,
  document.getElementById('root8')
)

// Conditional Rendering
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

ReactDOM.render(
  //<Greeting isLoggedIn={true}/>,
  <Map />,
  document.getElementById('root9')
)
