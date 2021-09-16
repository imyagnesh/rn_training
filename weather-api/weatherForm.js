import React, { memo, forwardRef } from 'react';

const WeatherForm = forwardRef(({ filterWeather }, ref) => (
    <div className="weather-form">
        <input type="text" ref={ref} onChange={filterWeather} />
    </div>
));

export default memo(WeatherForm);
