import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as WeatherActions from './../store/actions/weather.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addWeather(name:string, ) {
    this.store.dispatch(new WeatherActions.GetWeather({name: name, data: {} }) )
  }

  ngOnInit() {
  }

}