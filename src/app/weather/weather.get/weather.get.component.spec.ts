import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGetComponent } from './weather.get.component';

describe('WeatherGetComponent', () => {
  let component: WeatherGetComponent;
  let fixture: ComponentFixture<WeatherGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
