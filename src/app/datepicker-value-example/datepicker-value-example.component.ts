import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-value-example',
  templateUrl: './datepicker-value-example.component.html',
  styleUrls: ['./datepicker-value-example.component.css']
})
export class DatepickerValueExampleComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  constructor() { }

  ngOnInit() {
  }

}
