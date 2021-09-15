import React, { createRef, PureComponent } from 'react';

class WeatherApp extends PureComponent {
  inputWeatherRef = createRef(null);

  state = {
    weather: [],
  };

  componentDidMount = async () => {
    try {
      const res = await fetch(
        'http://localhost:3000/weather',
      );
      const json = await res.json();
      console.log(json);
      this.setState({
        weather: json,
      });
    } catch (error) {
      console.log(error);
    }
  };

  checkWeather = () => {
    const val = this.inputWeatherRef.current.value;
    const json = this.state.weather.city.filter(x => {
      if (x.city.startsWith(val)) {
        return x;
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Enter a City:</h2>
        <div>
          <input type="text" ref={this.inputWeatherRef} />
          <button type="button" onClick={this.checkWeather}>
            Check Weather
          </button>
        </div>
        {weather.map(item => (
          <span key={item.id}>
            Today weather in {item.city} is {item.temp}°C
          </span>
        ))}
      </div>
    );
  }
}

export default weather.js;
