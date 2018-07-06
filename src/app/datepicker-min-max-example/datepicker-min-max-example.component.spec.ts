import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMinMaxExampleComponent } from './datepicker-min-max-example.component';

describe('DatepickerMinMaxExampleComponent', () => {
  let component: DatepickerMinMaxExampleComponent;
  let fixture: ComponentFixture<DatepickerMinMaxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerMinMaxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMinMaxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
