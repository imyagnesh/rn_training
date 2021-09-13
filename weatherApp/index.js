import React, { PureComponent } from 'react';

class WeatherApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            name: '',
            temp: '',
        }

    };

    componentDidMount() {
        this.setState({
            cities: [
                {
                    name: 'chennai',
                    temp: '38',
                },
                {
                    name: 'madurai',
                    temp: '36',
                },
                {
                    name: 'trichy',
                    temp: '32',
                },
                {
                    name: 'mumbai',
                    temp: '30',
                },
            ]
        });
    }
    handleChange = (e) => {
        let value = e.target.value;
        this.setState({ name: value });
    };

    render() {
        const { cities } = this.state;

        let citiesList = cities.length > 0
            && cities.map((item, i) => {
                return (
                    <option key={i} value={item.temp}>{item.name}</option>

                )
            }, this);

        return (
            <div>
                <h1>Weather App</h1>
                <select onChange={this.handleChange}>
                    {citiesList}
                </select>

            </div>
        );
    }

}
export default WeatherApp;