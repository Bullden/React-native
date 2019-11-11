import { createAction } from "typesafe-actions"
import { WeatherRequest, WeatherActions } from "./types";

const prefix='@@weather';

export function doWeather(data: WeatherRequest) {
    return { type: `${prefix}/${WeatherActions.DO_WEATHER}`, data };
}

createAction(`${prefix}/${WeatherActions.DO_WEATHER}`, resolve => {
    return (data: WeatherRequest) => {
      return resolve({ data });
    };
});

export function getWeather(data: WeatherRequest) {
    return { type: `${prefix}/${WeatherActions.GET_WEATHER}`, data };
}

createAction(`${prefix}/${WeatherActions.GET_WEATHER}`, resolve => {
    return (data: WeatherRequest) => {
      return resolve({ data });
    };
  });
  