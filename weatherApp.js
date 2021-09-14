import React, { PureComponent, createRef } from 'react';
import weatherData from './weather';
import './app.scss';

class App extends PureComponent {
    todoInputRef = createRef(null);

    tempRef = createRef(null);

    addTodo = () => {
      const index = weatherData.findIndex(x => x.place === this.todoInputRef.current.value);
      let weatherElement =  weatherData[index];
      this.tempRef.current.value = `Weather in ${weatherElement.place} is ${weatherElement.temp} degree celsius`;
    };

    render() {
      console.log('render method');

      return (
        <div className="container">
          <h1>Weather App</h1>
          <div className="todo-form">
            <select name="place" ref={this.todoInputRef}>
              {weatherData.map(item => (
                <option value={item.place}>{item.place}</option>
              ))}
            </select>
            <button type="button" onClick={this.addTodo}>
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
