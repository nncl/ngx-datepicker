import { TestBed } from '@angular/core/testing';

import { NgxdatepickerService } from './ngxdatepicker.service';

describe('NgxdatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxdatepickerService = TestBed.get(NgxdatepickerService);
    expect(service).toBeTruthy();
  });
});
