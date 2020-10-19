import { TestBed } from '@angular/core/testing';

import { MyformserveService } from './myformserve.service';

describe('MyformserveService', () => {
  let service: MyformserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyformserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
