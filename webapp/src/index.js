import React from 'react';
import ReactDOM from 'react-dom';
import './CreatorConnect.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AltUsers from './altUsers';

const string = "Welcome to CreatorConnect!"
ReactDOM.render(<AltUsers/>, document.getElementById('test'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
