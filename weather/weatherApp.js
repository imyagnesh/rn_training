import React, { PureComponent, createRef } from 'react';
import weatherData from './weather';
import './weather.scss';

class App extends PureComponent {
    todoInputRef = createRef(null);

    tempRef = createRef(null);

    getData = () => {
      const index = weatherData.findIndex(x => x.place === this.todoInputRef.current.value);
      const weatherElement = weatherData[index];
      this.tempRef.current.value = `Weather in ${weatherElement.place} is ${weatherElement.temp} degree celsius`;
    };

    render() {
      return (
        <div className="container">
          <h1>Weather App</h1>
          <div className="todo-form">
            <select id="place" ref={this.todoInputRef}>
              {weatherData.map(item => (
                <option value={item.place}>{item.place}</option>
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
