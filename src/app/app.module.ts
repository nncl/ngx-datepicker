import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker/datepicker.component';
import { CharacterPipe } from './pipes/character/character.pipe';
import { WeekdayPipe } from './pipes/weekday/weekday.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    CharacterPipe,
    WeekdayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
