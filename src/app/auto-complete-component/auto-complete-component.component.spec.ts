import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteComponentComponent } from './auto-complete-component.component';

describe('AutoCompleteComponentComponent', () => {
  let component: AutoCompleteComponentComponent;
  let fixture: ComponentFixture<AutoCompleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
