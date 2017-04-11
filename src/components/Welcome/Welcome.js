import React from 'react'

const Welcome = function(props) {
  return (
    <h1>
      Hello {props.user ? formatName(props.user) : 'stranger'},
      welcome to ReactJS World!
    </h1>
  )
}

function formatName(user) {
  return (
    user.firstName + ' ' + user.lastName
  )
}
export default Welcome;
