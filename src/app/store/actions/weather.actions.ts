import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Weather } from '../models/weather.model';

export const GET_WEATHER = '[WEATHER] Get';
export const ADD_WEATHER = '[WEATHER] Add';
export const REMOVE_WEATHER = '[WEATHER] Remove';

export class GetWeather implements Action {
    readonly type = GET_WEATHER;

    constructor(public payload: Weather) {
    }
}

export class AddWeather implements Action {
    readonly type = ADD_WEATHER;

    constructor(public payload: Weather) {
    }
}

export class RemoveWeather implements Action {
    readonly type = REMOVE_WEATHER;

    constructor(public payload: string) { }
}

export type Actions = GetWeather | AddWeather | RemoveWeather;
