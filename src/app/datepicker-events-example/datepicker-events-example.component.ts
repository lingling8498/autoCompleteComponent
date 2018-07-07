import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-events-example',
  templateUrl: './datepicker-events-example.component.html',
  styleUrls: ['./datepicker-events-example.component.css']
})
export class DatepickerEventsExampleComponent implements OnInit {
  events: string[]=[];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
