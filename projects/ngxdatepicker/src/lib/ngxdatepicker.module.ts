import { NgModule } from '@angular/core';
import { NgxdatepickerComponent } from './ngxdatepicker.component';
import { CommonModule } from '@angular/common';
import { WeekdayPipe} from '../pipes/weekday/weekday.pipe';


@NgModule({
  declarations: [NgxdatepickerComponent, WeekdayPipe],
  imports: [
    CommonModule,
  ],
  exports: [NgxdatepickerComponent, WeekdayPipe]
})
export class NgxdatepickerModule { }
