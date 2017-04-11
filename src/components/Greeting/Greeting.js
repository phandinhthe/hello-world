import React from 'react'


const Greeting = function(props) {
  return (
    props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
  )
}

function UserGreeting(props) {
  return (
    <h1>
      Welcome back to us!
    </h1>
  )
}

function GuestGreeting(props) {
  return (
    <h1>
      Welcome to ReactJS world, please sign up!
    </h1>
  )
}

export default Greeting;
