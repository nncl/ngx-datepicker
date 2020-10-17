import * as moment_ from "moment";
import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
} from "@angular/core";
import { Moment } from "moment";
import { IDay } from "../interfaces/day/day";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const moment = moment_;

@Component({
  selector: "dd-ngxdatepicker",
  template: `
    <div class="datepicker">
      <div class="datepicker__close">
        <button type="button">Fechar</button>
      </div>

      <div class="datepicker__content">
        <header class="datepicker__header">
          <button type="button" class="previous" (click)="toggle(false)">
            {{ previous }}
          </button>

          <strong class="current">
            {{ current.format("MMMM") }}
          </strong>

          <button type="button" class="next" (click)="toggle(true)">
            {{ next }}
          </button>
        </header>

        <div class="datepicker__weeks">
          <div class="datepicker__week" *ngFor="let week of weeks">
            <strong>{{ week.weekday | weekday }}</strong>
            <ul class="datepicker__days">
              <li
                *ngFor="let date of week.days"
                [ngClass]="{ disabled: date.disabled, selected: date.selected }"
                (click)="select(date)"
              >
                {{ date.day | date: "d" }}
              </li>
            </ul>
          </div>
        </div>

        <footer class="datepicker__footer">
          <button>Selecionar</button>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ["./datepicker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxdatepickerComponent),
      multi: true,
    },
  ],
})
export class NgxdatepickerComponent implements OnInit, ControlValueAccessor {
  @Output() dateClicked = new EventEmitter<string>();
  weeks: any[] = Array.from(Array(7).keys(), (n) => {
    return { weekday: n, days: [] };
  });
  current: Moment;
  previous: any;
  next: any;
  selected: IDay;
  val = "";

  constructor() {
    this.current = moment();
  }

  onChange: any = (a, b) => {};

  onTouch: any = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);

      if (this.value) {
        const day = moment(new Date(this.value)).startOf("day");

        this.current = moment(new Date(this.value));

        this.selected = {
          day: day.format(),
          weekday: parseInt(day.format("d"), 10),
          disabled: null,
          selected: true,
        };

        this.select(this.selected);
      }

      this.updatePrevNext();
    }
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  updatePrevNext() {
    const date = moment(this.current.format());
    this.previous = date.subtract(1, "month").format("MMMM");
    this.next = date.add(2, "month").format("MMMM");
    this.buildMonth();
  }

  ngOnInit() {
    // this.updatePrevNext(); // FIXME
  }

  buildMonth() {
    const days: IDay[] = [];
    const date = moment(this.current, "MMMM");
    const startOfMonth = moment(date.startOf("month"));
    const endOfMonth = moment(date.endOf("month"));
    const currentMonth = endOfMonth.format("M");
    const day = startOfMonth;

    // Check if startOfMonth's weekday starts on 0, if not, update it to the first
    // earlier date which starts with 0
    const startOfMonthWeekday = parseInt(startOfMonth.format("d"), 10);
    Array.from(Array(startOfMonthWeekday).keys()).map(() =>
      startOfMonth.subtract(1, "day")
    );

    // Same with endOfMonth ending on a 6
    const endOfMonthWeekday = parseInt(endOfMonth.format("d"), 10);
    Array.from(Array(6 - endOfMonthWeekday).keys()).map(() =>
      endOfMonth.add(1, "day")
    );

    while (startOfMonth <= endOfMonth) {
      const obj: IDay = {
        day: day.format(),
        weekday: parseInt(day.format("d"), 10),
        disabled: !(currentMonth === day.format("M")),
        selected: day.format() === this.selected?.day,
      };

      days.push(obj);
      day.add(1, "day");
    }

    this.matchDays(days);
  }

  matchDays(days: any[]) {
    this.weeks.map((week) => {
      week.days = days.filter((day) => week.weekday === day.weekday);
      return week;
    });
  }

  /**
   * @description
   * Back or go between months
   *
   * @param add Either add or subtract a month
   */
  toggle(add: boolean) {
    const date = moment(this.current, "MMMM");
    add ? date.add(1, "month") : date.subtract(1, "month");
    this.current = date;
    this.updatePrevNext();
  }

  /**
   * @description
   * Emit a value and add selected class to the current day
   *
   * @param date Current clicked day
   */
  select(date: IDay) {
    this.selected = { ...date, selected: true };
    this.dateClicked.emit(date.day);
    this.writeValue(date.day);
    this.addClass();
  }

  addClass() {
    // Set selected class
    this.weeks = this.weeks.map((week) => {
      week.days = week.days.map((dayItem) => {
        return {
          ...dayItem,
          selected: dayItem.day === this.selected?.day,
        };
      });

      return week;
    });
  }
}
