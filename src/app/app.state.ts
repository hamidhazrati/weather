import { Weather } from './store/models/weather.model';

export interface AppState {
  readonly weather: Weather[];
}