import React, { createRef, PureComponent } from 'react';
import './weather.scss';
import axiosInstance from '../utils/axiosInstance';

class WeatherApp extends PureComponent {
  weatherInputRef = createRef(null);

  state = {
    cities: [],
    filterCities: [],
    status: [],
  };

  componentDidMount = async () => {
    const requestType = 'fetch_weather';
    try {
      this.setApiRequest(requestType);
      const res = await axiosInstance.get('weather');
      this.setState({
        cities: res,
      });
      this.setApiResponse(requestType, 'success');
    } catch (error) {
      console.log(error);
      this.setApiResponse(requestType, 'fail');
    } finally {
      this.setIdle(requestType);
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
  };

  setApiRequest = (requestType, id) => {
    this.setState(({ status }) => ({
      status: [
        ...status,
        { status: `${requestType}_request`, id },
      ],
    }));
  };

  setApiResponse = (requestType, type, id) => {
    this.setState(({ status }) => {
      const index = status.findIndex(x => {
        const [, requestName] =
          /(.*)_(request|success|fail)/.exec(x.status);
        if (id) {
          return requestName === requestType && x.id === id;
        }
        return requestName === requestType;
      });
      return {
        status: [
          ...status.slice(0, index),
          { status: `${requestType}_${type}` },
          ...status.slice(index + 1),
        ],
      };
    });
  };

  setIdle = (requestType, id) => {
    this.setState(({ status }) => {
      const index = status.findIndex(x => {
        const [, requestName] =
          /(.*)_(request|success|fail)/.exec(x.status);
        if (id) {
          return requestName === requestType && x.id === id;
        }
        return requestName === requestType;
      });
      return {
        status: [
          ...status.slice(0, index),
          ...status.slice(index + 1),
        ],
      };
    });
  };

  render() {
    const { filterCities } = this.state;

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
            Today's weather in {item.city} is {item.temp}
            °C
          </span>
        ))}
      </div>
    );
  }
}

export default WeatherApp;
