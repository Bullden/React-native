export enum WeatherActions {
    DO_WEATHER = 'DO_WEATHER',
    GET_WEATHER = 'GET_WEATHER'
    // LOGIN_SUCCESS = "LOGIN_SUCCESS",
    // LOGIN_FAILED = "LOGIN_FAILED",
    // DO_LOGOUT = "DO_LOGOUT"
}

export interface WeatherRequest {
    apiWeather: Object
}
export interface WeatherState {
    apiWeather: Object
}