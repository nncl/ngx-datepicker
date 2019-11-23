import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IDay } from '../../../interfaces/day/day';
import { Moment } from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  weeks: any[] = Array.from(Array(7).keys(), n => {
    return {weekday: n, days: []};
  });
  current: Moment;
  previous: any;
  next: any;

  constructor() {
    this.current = moment();
  }

  updatePrevNext() {
    const date = moment(this.current.format());
    this.previous = date.subtract(1, 'month').format('MMMM');
    this.next = date.add(2, 'month').format('MMMM');
    this.buildMonth();
  }

  ngOnInit() {
    this.updatePrevNext();
  }

  buildMonth() {
    const days: IDay[] = [];
    const date = moment(this.current, 'MMMM');
    const startOfMonth = moment(date.startOf('month'));
    const endOfMonth = moment(date.endOf('month'));
    const currentMonth = endOfMonth.format('M');
    const day = startOfMonth;

    // Check if startOfMonth's weekday starts on 0, if not, update it to the first
    // earlier date which starts with 0
    const startOfMonthWeekday = parseInt(startOfMonth.format('d'), 10);
    Array.from(Array(startOfMonthWeekday).keys())
      .map(() => startOfMonth.subtract(1, 'day'));

    // Same with endOfMonth ending on a 6
    const endOfMonthWeekday = parseInt(endOfMonth.format('d'), 10);
    Array.from(Array(6 - endOfMonthWeekday).keys())
      .map(() => endOfMonth.add(1, 'day'));

    while (startOfMonth <= endOfMonth) {
      const obj: IDay = {
        day: day.format(),
        weekday: parseInt(day.format('d'), 10),
        disabled: !(currentMonth === day.format('M'))
      };
      days.push(obj);
      day.add(1, 'day');
    }

    this.matchDays(days);
  }

  matchDays(days: any[]) {
    this.weeks.map(week => {
      week.days = days.filter(day => week.weekday === day.weekday);
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
