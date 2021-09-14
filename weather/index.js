import React, { PureComponent } from 'react';
import './weather.scss';

class WeatherApp extends PureComponent {
    state = {
        cities: [
            {
                id: new Date().valueOf(),
                name: 'Chennai',
                temp: 35,
            },
            {
                id: new Date().valueOf() + 1,
                name: 'Coimbatore',
                temp: 28,
            },
            {
                id: new Date().valueOf() + 2,
                name: 'Cuddalore',
                temp: 35,
            },
            {
                id: new Date().valueOf() + 3,
                name: 'Erode',
                temp: 37,
            },
            {
                id: new Date().valueOf() + 4,
                name: 'Salem',
                temp: 33,
            },
            {
                id: new Date().valueOf() + 5,
                name: 'Tirunelveli',
                temp: 37,
            },
            {
                id: new Date().valueOf() + 6,
                name: 'Madurai',
                temp: 36,
            },
            {
                id: new Date().valueOf() + 7,
                name: 'Tiruppur',
                temp: 36,
            },
        ],
    };

    onSelectChange = e => {
        const { cities } = this.state;
        const value = e.target.value;
        const city = cities.find(x => x.name === value);
        this.setState({
            weather: `Today's weather in ${city.name} is ${city.temp}°C`,
        });
    };

    render() {
        const { cities, weather } = this.state;

        return (
            <div className="container">
                <h2>Choose a City:</h2>
                <div className="wrapper">
                    <select
                        name="cities"
                        onChange={this.onSelectChange}>
                        {cities.map(item => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <button type="button">Check Weather</button>
                </div>
                <span>{weather}</span>
            </div>
        );
    }
}

export default WeatherApp;