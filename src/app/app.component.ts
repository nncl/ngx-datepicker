import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('datepicker') datepicker: any;
  @ViewChild('datepicker2') datepicker2: any;
  invalidDates: string[] = [];

  date: string;
  model: any = moment('29/11/2020', 'DD/MM/YYYY').format();

  date2: string;
  model2: any = moment('25/12/2020', 'DD/MM/YYYY').format();

  date3: string;
  model3: any = moment('25/12/2020', 'DD/MM/YYYY').format();

  date4: string;
  model4: any = moment().format();

  ngOnInit() {
    const tomorrow = moment().add(1, 'days').format();
    const someDayOfNextMonth = moment().add(1, 'month').format();
    this.invalidDates.push(tomorrow);
    this.invalidDates.push(someDayOfNextMonth);
  }
}
