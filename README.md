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

```
import { NgxdatepickerModule } from '@clmeida/ngxdatepicker';

@NgModule({
  imports: [
    NgxdatepickerModule
  ]
})
export class AppModule { }
```

Add the component in your application:

```angular2html
<dd-ngxdatepicker (dateClicked)="myComponentVariable = $event"></dd-ngxdatepicker>
```

## API

### Outputs

| Name   | Description  |
|---|---|
| (dateClicked)  | Outputs a string when a day is clicked
