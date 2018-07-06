import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerValueExampleComponent } from './datepicker-value-example.component';

describe('DatepickerValueExampleComponent', () => {
  let component: DatepickerValueExampleComponent;
  let fixture: ComponentFixture<DatepickerValueExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerValueExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerValueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
