import React, { PureComponent, createRef } from 'react';
import './weather.scss';

class Weather extends PureComponent {

    weatherInputRef = createRef(null);

    state = {
        weatherList: [
            {
                cityName: "chennai",
                temp: 32
            },
            {
                cityName: "bangalore",
                temp: 28
            },
            {
                cityName: "pune",
                temp: 29
            },
            {
                cityName: "delhi",
                temp: 21
            },
            {
                cityName: "nellai",
                temp: 33
            }
        ],
        selectedOption: null,
        selectedVlaue: null,

    };

    handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption.target.value);
        this.setState({ selectedOption: selectedOption, selectedVlaue: selectedOption.target.value });
    };

    render() {
        const { weatherList, selectedVlaue } = this.state;
        return (
            <div className="container">
                <h1> Weather App </h1>
                <div className="weather-form">
                    <select name="weatherList" value={weatherList} onChange={this.handleChange}>
                        {weatherList.map((e, key) => {
                            return <option key={key} value={e.temp}>{e.cityName}</option>;
                        })}
                    </select>
                    <button onClick={this.handleChange}> Weather Report </button>
                </div>
                <div className="report" >
                    {selectedVlaue ? <h2> Weather report for city is <span>{selectedVlaue}</span> </h2> : null}
                </div>
            </div>
        );
    }

}

export default Weather;