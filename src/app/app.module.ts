import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { reducer } from './store/reducers/weather.reducer';
import { WeatherDisplayComponent } from './weather/weather.display/weather.display.component';
import { WeatherGetComponent } from './weather/weather.get/weather.get.component';
import { WeatherService } from './services/weather/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    WeatherGetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([WeatherEffects]),
    StoreModule.forRoot({
      weather: reducer
    })
  ],
  providers: [WeatherService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
