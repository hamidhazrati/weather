import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WeatherEffects } from './weather.effects';

describe('WeatherEffects', () => {
  const actions$: Observable<any> = null;
  let effects: WeatherEffects = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WeatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
