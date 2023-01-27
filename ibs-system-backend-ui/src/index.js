import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//everything added in here will be rendered in our application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
