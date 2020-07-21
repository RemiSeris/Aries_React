import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Layouts/App';
import AppContext from './AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);
