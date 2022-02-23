import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import GlobalStyle from 'styles/globalStyles';
import AppContext from 'App/context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
