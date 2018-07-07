import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerEventsExampleComponent } from './datepicker-events-example.component';

describe('DatepickerEventsExampleComponent', () => {
  let component: DatepickerEventsExampleComponent;
  let fixture: ComponentFixture<DatepickerEventsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerEventsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerEventsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
