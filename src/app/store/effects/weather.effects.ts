import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError } from 'rxjs/operators';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { WeatherService } from 'src/app/services/weather/weather.service';
import * as WeatherActions from '../actions/weather.actions';

export class EffectError implements Action {
    readonly type = '[Error] Effect Error';
}

@Injectable()
export class WeatherEffects {

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private weatherService: WeatherService
    ) { }

    @Effect()
    loadWeather$ = this.actions$.pipe(
        ofType(WeatherActions.GET_WEATHER),
        map((action: any) => action.payload), // action: LoadWeather
        switchMap((o: any) =>
            this.weatherService.searchWeatherForCity(o.name).pipe(
                map((weather: any) => {
                    // console.log({name:weather.city.name, data:weather});
                    return new WeatherActions.AddWeather({ name: weather.city.name, data: weather });
                }
                ),
                catchError(() => of(new WeatherActions.RemoveWeather(o.name)))
            )
        )
    );
}
