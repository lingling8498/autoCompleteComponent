import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-filter-example',
  templateUrl: './datepicker-filter-example.component.html',
  styleUrls: ['./datepicker-filter-example.component.css']
})
export class DatepickerFilterExampleComponent implements OnInit {
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() {
  }

}
