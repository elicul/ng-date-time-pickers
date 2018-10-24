import { TestBed } from '@angular/core/testing';

import { NgDateTimePickersService } from './ng-date-time-pickers.service';

describe('NgDateTimePickersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDateTimePickersService = TestBed.get(NgDateTimePickersService);
    expect(service).toBeTruthy();
  });
});
