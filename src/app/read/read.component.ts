import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Weather } from './../store/models/weather.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  weathers: Observable<Weather[]>;

  constructor(private store: Store<AppState>) { 
    this.weathers = store.select('weather');
  }

  ngOnInit() {}

}
