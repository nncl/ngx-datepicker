import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxdatepickerModule } from "ngxdatepicker";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxdatepickerModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
