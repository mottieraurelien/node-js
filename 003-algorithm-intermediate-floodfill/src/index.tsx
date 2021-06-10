import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Floodfill from "./game";

ReactDOM.render(
    <React.StrictMode>
        <Floodfill/>
    </React.StrictMode>,
    document.getElementById('root')
);