import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameOfLife from './game';

ReactDOM.render(
  <React.StrictMode>
    <GameOfLife />
  </React.StrictMode>,
  document.getElementById('root')
);