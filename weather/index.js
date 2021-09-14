import React, { PureComponent, createRef } from 'react';

class Weather extends PureComponent {

  weatherInputRef = createRef(null);

  state = {
    weatherList: [
      {
        cityName: "chennai",
      },
      {
        cityName: "bangalore",
      },
      {
        cityName: "pune",
      },
      {
        cityName: "delhi",
      },
      {
        cityName: "patna",
      }
    ],
    selectedOption: null,
    selectedVlaue: null,

  };

  handleChange = async selectedOption => {

    try {
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=c869ce0bcd6bf65a74690e7086101b2a&query=${selectedOption.target.value}`,
      );
      const json = await res.json();
      this.setState({ selectedOption: selectedOption, selectedVlaue: JSON.stringify(json) });
    } catch (error) {
      this.setState({ selectedOption: selectedOption, selectedVlaue: "failed API" });
    } finally {
    }
  };

  render() {
    const { weatherList, selectedVlaue } = this.state;
    return (
      <div>
        <h1> Fetch Weather using API </h1>
        <div>
          <select value={weatherList} onChange={this.handleChange}>
            {weatherList.map((e, key) => {
              return <option key={key} value={e.cityName}>{e.cityName}</option>;
            })}
          </select>
          <button onClick={this.handleChange}> Fetch Weather </button>
        </div>
        <div >
          {selectedVlaue ? <h2> Weather report is : ======== <span>{selectedVlaue}</span> </h2> : null}
        </div>
      </div>
    );
  }

}

export default Weather;