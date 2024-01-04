import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/app.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/icons.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
