# Ngxdatepicker

[![npm](https://img.shields.io/npm/v/@clmeida/ngxdatepicker.svg)](https://www.npmjs.com/package/@clmeida/ngxdatepicker)

Custom Datepicker for Angular 8+ applications.

[Demo](https://ngxdatepicker.surge.sh/).

## Getting Started

Install through npm:

```
npm i @clmeida/ngxdatepicker --save
```

Include its module in your `app.module.ts` file:

```typescript
import { NgxdatepickerModule } from "@clmeida/ngxdatepicker";

@NgModule({
  imports: [NgxdatepickerModule],
})
export class AppModule {}
```

Add the component in your application:

```html
<dd-ngxdatepicker
  (dateClicked)="myComponentVariable = $event"
  name="date"
  [(ngModel)]="date"
></dd-ngxdatepicker>
```

It's not required to use both `dateClicked` and `ngModel` together, you can use either one of them.

## API

### Events

| Name          | Description                            |
| ------------- | -------------------------------------- |
| (dateClicked) | Outputs a string when a day is clicked |

### Methods

| Name   | Description                    |
| ------ | ------------------------------ |
| goPrev | Goes back to earlier month     |
| goNext | Goes forward to the next month |

#### Example

```typescript
import { ViewChild } from "@angular/core";
import * as moment from "moment";

export class AppComponent {
  @ViewChild("datepicker") datepicker: any;
  date: any = moment("25/12/2020", "DD/MM/YYYY").format();
}
```

```html
<dd-ngxdatepicker #datepicker name="date" [(ngModel)]="date"></dd-ngxdatepicker>

<button type="button" (click)="datepicker?.goPrev()">
  My custom prev Button
</button>

<button type="button" (click)="datepicker?.goNext()">
  My custom next Button
</button>
```

### Slots

| Name | Description                                   |
| ---- | --------------------------------------------- |
| prev | Replace default prev button with a custom one |
| next | Replace default next button with a custom one |

#### Example

```html
<dd-ngxdatepicker #datepicker name="date" [(ngModel)]="date">
  <button type="button" (click)="datepicker?.goPrev()" prev>Custom Prev</button>
  <button type="button" (click)="datepicker?.goNext()" next>Custom Next</button>
</dd-ngxdatepicker>
```

### Style

Every time you select a day a class named `selected` is bound to that element.
