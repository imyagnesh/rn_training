import React, { createRef, PureComponent } from 'react';
import './weather.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

class WeatherApp extends PureComponent {
    weatherInputRef = createRef(null);

    state = {
        cities: [],
        filterCities: [],
    };

    componentDidMount = async () => {
        try {
            const res = await fetch(
                'http://localhost:3000/weather',
            );
            const json = await res.json();
            console.log(json);
            this.setState({
                cities: json,
            });
        } catch (error) {
            console.log(error);
        }
    };

    checkWeather = () => {
        const val = this.weatherInputRef.current.value;
        const json = this.state.cities.filter(x => {
            if (x.city.startsWith(val)) {
                return x;
            }
        });
        this.setState({
            filterCities: json,
        });
        console.log(json);
    };
    // https://dzone.com/articles/how-to-add-autocomplete-textbox-in-react-applicati
    render() {
        const { weather, filterCities } = this.state;

        return (
            <div className="container">
                <h2>Type a City:</h2>
                <div className="wrapper">
                    {/* <input type="text" ref={this.weatherInputRef} /> */}
                    <Autocomplete className="pding" id="combo-box-demo" options={this.state.cities} getOptionLabel={option => option.Name} style={{ width: 300 }} renderInput={params => (< TextField {...params} label="Auto Complete" variant="outlined" fullWidth />)} />
                    <button type="button" onClick={this.checkWeather}>
                        Check Weather
                    </button>
                </div>
                {filterCities.map(item => (
                    <span key={item.id}>
                        Today's weather in {item.city} is {item.temp}°C
                    </span>
                ))}
            </div>
        );
    }
}

export default WeatherApp;
