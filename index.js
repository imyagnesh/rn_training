import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import Weather from './weather/index';
import WeatherApi from './weather-api/index';

ReactDOM.render(
    <WeatherApi initCounter={3} />,
    document.getElementById('root'),
);
