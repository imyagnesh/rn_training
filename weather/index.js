import React, { PureComponent } from 'react';

class WeatherApp extends PureComponent {
  // token = null;
  state = {
    city: "",
    weather: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      filter: value
    });

    this.search(value);
  };



  componentDidMount = async () => {
    try {
      const res = await fetch(
        'http://localhost:3000/weather',
      );
      const json = await res.json();
      console.log('res', res);
      console.log('json', json);
      this.setState({
        weather: json,
      });
    } catch (error) {
      this.setState({
        hasError: true,
      });
      console.log(error);
    }
  };

  render() {
    const { filter } = this.state;
    return (
      <form>
        <input
          type="text"
          value={filter}
          onChange={this.onChange}
        />
        {this.state.weather.map(weather => (
          <ul key={weather.city}>
            <li>{weather.city}</li>
          </ul>
        ))}
      </form>
    );
  }
}
export default WeatherApp;