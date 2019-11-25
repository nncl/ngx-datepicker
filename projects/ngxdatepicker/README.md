# Ngxdatepicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Getting Started

Include its module in your `app.module.ts` file:

```
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxdatepickerModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the component:

```
<dd-ngxdatepicker (dateClicked)="myComponentVariable = $event"></dd-ngxdatepicker>
```

## Events:

| Name   | Default  | Type  | Description  |
|---|---|---|---|
| dateClicked  |  -  | string  | Returns a string when a day is clicked
