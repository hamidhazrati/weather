import { Action } from '@ngrx/store'
import { Weather } from './../models/weather.model'
import * as WeatherActions from './../actions/weather.actions'

const initialState: Weather = {
    name: null,
    data: null
}

export function reducer(state: Weather[] = [], action: WeatherActions.Actions) {

    switch (action.type) {
        case WeatherActions.REMOVE_WEATHER:
            return [...state.filter((w)=>w.name.toUpperCase()!==action.payload.toUpperCase())];

        case WeatherActions.GET_WEATHER:
            console.log('reducer GetWeather'    , action.payload)
            return [...state, action.payload];

        case WeatherActions.ADD_WEATHER:
            console.log('reducer AddWeather', action.payload)
            state = state.filter((w)=>w.name.toUpperCase()!==action.payload.name.toUpperCase());
            return [...state, action.payload];
            
        default:
            return state;
    }
}