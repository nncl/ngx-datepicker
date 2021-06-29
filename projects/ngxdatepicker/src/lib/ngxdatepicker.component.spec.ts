import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxdatepickerComponent } from './ngxdatepicker.component';

describe('NgxdatepickerComponent', () => {
  let component: NgxdatepickerComponent;
  let fixture: ComponentFixture<NgxdatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxdatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxdatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
