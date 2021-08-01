import { NgModule } from '@angular/core';
import { NgxdatepickerComponent } from './ngxdatepicker.component';
import { CommonModule } from '@angular/common';
import { WeekdayPipe } from '../pipes/weekday/weekday.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ NgxdatepickerComponent, WeekdayPipe ],
  imports: [ CommonModule, FormsModule ],
  exports: [ NgxdatepickerComponent, WeekdayPipe ],
})
export class NgxdatepickerModule {
}
