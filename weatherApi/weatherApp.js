import React, { PureComponent, createRef } from 'react';
import '../weather/weather.scss';

class App extends PureComponent {
    todoInputRef = createRef(null);

    tempRef = createRef(null);

state = {
  weatherData: [],
  hasError: false,
};

componentDidMount = async () => {
  try {
    const res = await fetch('http://localhost:3000/weather');
    const json = await res.json();
    this.setState({
      weatherData: json,
    });
  } catch (error) {
    this.setState({
      hasError: true,
    });
  }
};

    getData = () => {
      const {weatherData} = this.state;
      const index = weatherData.findIndex(x => x.city === this.todoInputRef.current.value);
      const weatherElement = weatherData[index];
      this.tempRef.current.value = `Weather in ${weatherElement.city} is ${weatherElement.temp} degree celsius`;
    };

    render() {
      const { weatherData, hasError } = this.state;
      if (hasError) {
        return (<h1>Server Error</h1>);
      }
      return (
        <div className="container">
          <h1>Weather App</h1>
          <div className="todo-form">
            <select id="place" ref={this.todoInputRef}>
              {weatherData.map(item => (
                <option value={item.city}>{item.city}</option>
              ))}
            </select>
            <button type="button" onClick={this.getData}>
              Get Data
            </button>
          </div>
          <div className="todo-filter">
            <input type="text" ref={this.tempRef} />
          </div>
        </div>
      );
    }
}

export default App;
