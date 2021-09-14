import React, { createRef, PureComponent } from 'react';
import './weather.scss';

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

  render() {
    const { weather, filterCities } = this.state;

    return (
      <div className="container">
        <h2>Type a City:</h2>
        <div className="wrapper">
          <input type="text" ref={this.weatherInputRef} />
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
