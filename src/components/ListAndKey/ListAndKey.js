import React from 'react';

function ListAndKey(props) {
  const NUMBERS_ARRAY = [1, 2, 3, 4, 5];
  var numbers = props.numbers ? props.numbers : NUMBERS_ARRAY;
  var listItems = numbers.map((number) => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  return (
    <ul>{listItems}</ul>
  );
}

export default ListAndKey;
