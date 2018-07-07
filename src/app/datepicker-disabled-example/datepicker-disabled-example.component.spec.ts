import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDisabledExampleComponent } from './datepicker-disabled-example.component';

describe('DatepickerDisabledExampleComponent', () => {
  let component: DatepickerDisabledExampleComponent;
  let fixture: ComponentFixture<DatepickerDisabledExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerDisabledExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
