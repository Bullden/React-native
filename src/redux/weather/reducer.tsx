import { RootState } from "../../redux/rootReducer";
import { WeatherState } from "./types";

export const initialState: WeatherState = {
    apiWeather:{}
};

export function weatherReducer(state: WeatherState = initialState,action:any) {
    switch(action.type) {
        // case `@@weather/DO_WEATHER`: {
        //     const data = action.payload
        //     console.log('DO_WEATHER');
            
        //     return{
        //         ...state,
        //         // apiWeather: data
        //     }
        // }

        case `@@weather/GET_WEATHER`: {  
            const data = action.payload.data
            return{
                ...state,
                apiWeather: data
            }
        }
        default:
            return state;
    }
}
export const weather = (state: RootState) => state.weather;