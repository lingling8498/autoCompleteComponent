import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-min-max-example',
  templateUrl: './datepicker-min-max-example.component.html',
  styleUrls: ['./datepicker-min-max-example.component.css']
})
export class DatepickerMinMaxExampleComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
