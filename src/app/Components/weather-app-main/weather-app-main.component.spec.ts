import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAppMainComponent } from './weather-app-main.component';

describe('WeatherAppMainComponent', () => {
  let component: WeatherAppMainComponent;
  let fixture: ComponentFixture<WeatherAppMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherAppMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
