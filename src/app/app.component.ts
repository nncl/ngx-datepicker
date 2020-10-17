import { Component, ViewChild } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("datepicker") datepicker: any;
  @ViewChild("datepicker2") datepicker2: any;

  date: string;
  model: any = moment("29/11/2020", "DD/MM/YYYY").format();

  date2: string;
  model2: any = moment("25/12/2020", "DD/MM/YYYY").format();
}
