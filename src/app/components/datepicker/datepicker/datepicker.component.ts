import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  weeks: any[] = Array.from(Array(7).keys(), n => {
    return {weekday: n, days: []};
  });
  current: any;
  previous: any;
  next: any;

  constructor() {
    this.current = moment();
  }

  updatePrevNext() {
    const date = moment(this.current.format());
    this.previous = date.subtract(1, 'month').format('MMMM');
    this.current = date.add(1, 'month').format('MMMM');
    this.next = date.add(1, 'month').format('MMMM');
    this.buildMonth();
  }

  ngOnInit() {
    this.updatePrevNext();
  }

  buildMonth() {
    const days: any[] = [];
    const date = moment(this.current, 'MMMM');
    const startOfMonth = moment(date.startOf('month'));
    const endOfMonth = moment(date.endOf('month'));
    const day = startOfMonth;

    // TODO Add interface typings

    // TODO Refactor: add already the earlier days
    while (startOfMonth <= endOfMonth) {
      days.push({day: day.format(), weekday: day.format('d')});
      day.add(1, 'day');
    }

    // TODO Refactor
    // If the first day do not start on a Sunday, we should add the days before to fill the datepicker
    if (days[0].weekday != 0) {
      const firstday = days[0];
      const formatted = moment(firstday.day);
      // tslint:disable-next-line:radix
      Array.from(Array(parseInt(firstday.weekday)).keys(), () => {
        formatted.subtract(1, 'day');
        return {
          day: formatted.format(),
          weekday: formatted.format('d'),
          disabled: true,
        };
      }).map(item => days.unshift(item));
    }

    if (days[days.length - 1].weekday != 6) {
      const lastday = days[days.length - 1];
      const formatted = moment(lastday.day);
      // tslint:disable-next-line:radix
      Array.from(Array(6 - parseInt(lastday.weekday)).keys(), () => {
        formatted.add(1, 'day');
        return {
          day: formatted.format(),
          weekday: formatted.format('d'),
          disabled: true,
        };
      }).map(item => days.push(item));
    }

    this.matchDays(days);
  }

  matchDays(days: any[]) {
    this.weeks.map(week => {
      week.days = days.filter(day => week.weekday == day.weekday);
      return week;
    });
  }

  toggle(add: boolean) {
    const date = moment(this.current, 'MMMM');
    add ? date.add(1, 'month') : date.subtract(1, 'month');
    this.current = date;
    this.updatePrevNext();
  }
}
