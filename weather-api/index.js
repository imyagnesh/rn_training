import React, { PureComponent, createRef } from 'react';
import WeatherForm from './weatherForm';
import WeatherList from './weatherList';
import './weather.scss';
import axiosInstance from '../utils/axiosInstance';

class WeatherApi extends PureComponent {
    weatherInputRef = createRef(null);

    state = {
        weatherList: [],
        status: [],
        text: ""
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

    componentDidMount = async () => {
        const requestType = 'fetch_todo';
        try {
            this.setApiRequest(requestType);

            // const res = await fetch(
            //     'http://localhost:3000/weather',
            // );
            const res = await axiosInstance.get('weather')
            // const json = await res.json();
            this.setState({
                weatherList: res,
            });
            this.setApiResponse(requestType, 'success');
        } catch (error) {
            this.setApiResponse(requestType, 'fail');
        } finally {
            this.setIdle(requestType);
        }
    };

    filterWeather = () => {
        this.setState(
            { text: this.weatherInputRef.current.value }
        );
        // console.log(this.state.text);
    }

    render() {
        const { weatherList, status, text } = this.state;

        return (
            <div className="container">
                <h1>Weather Api</h1>
                <WeatherForm
                    status={status}
                    ref={this.weatherInputRef}
                    filterWeather={this.filterWeather}
                />
                <WeatherList
                    weatherList={weatherList}
                    text={text}
                />
            </div>
        )
    }

}

export default WeatherApi;