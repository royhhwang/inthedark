import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
        registration.unregister()
    }
})