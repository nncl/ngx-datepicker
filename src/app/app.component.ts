import { Component } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  date: string;
  model: any;

  date2: string;
  model2: any = moment("29/11/2020", "DD/MM/YYYY").format();
}
