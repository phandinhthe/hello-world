import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './index.css';

const user = {
  firstName: 'The',
  lastName: 'Phan'
}

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);
