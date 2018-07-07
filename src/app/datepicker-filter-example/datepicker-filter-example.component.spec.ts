import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFilterExampleComponent } from './datepicker-filter-example.component';

describe('DatepickerFilterExampleComponent', () => {
  let component: DatepickerFilterExampleComponent;
  let fixture: ComponentFixture<DatepickerFilterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerFilterExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerFilterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
