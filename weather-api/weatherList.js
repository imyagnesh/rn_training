import React, { memo, forwardRef } from 'react';

const WeatherList = forwardRef(({ weatherList, text }) => (
    <div className="weather-list-wrapper">
        {weatherList.filter(item => item.city.includes(text))
            .map(ele => (
                <div key={ele.id} className="weather-list">
                    <span > {` temprature of  ${ele.city} is ${ele.temp}`} </span>
                </div>
            ))
        }
    </div>
));

export default memo(WeatherList);
