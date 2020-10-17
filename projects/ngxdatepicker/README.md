# Ngxdatepicker

[![npm](https://img.shields.io/npm/v/@clmeida/ngxdatepicker.svg)](https://www.npmjs.com/package/@clmeida/ngxdatepicker)

Custom Datepicker for Angular 8+ applications.

[Demo](https://ngxdatepicker.stackblitz.io/).

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

### Style

Every time you select a day a class named `selected` is binded to that element.
