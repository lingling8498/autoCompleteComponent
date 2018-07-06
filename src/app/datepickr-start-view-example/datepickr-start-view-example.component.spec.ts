import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickrStartViewExampleComponent } from './datepickr-start-view-example.component';

describe('DatepickrStartViewExampleComponent', () => {
  let component: DatepickrStartViewExampleComponent;
  let fixture: ComponentFixture<DatepickrStartViewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickrStartViewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickrStartViewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
