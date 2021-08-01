import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxdatepickerModule } from '../../projects/ngxdatepicker/src/lib/ngxdatepicker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxdatepickerModule, FormsModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
