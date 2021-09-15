import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
// import App from './weather/weatherApp';
// import App from './todo/todoApp';
import App from './weatherApi/weatherApp';

ReactDOM.render(
  <App initCounter={3} />,
  document.getElementById('root'),
);
