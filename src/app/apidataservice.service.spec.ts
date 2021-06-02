import { TestBed } from '@angular/core/testing';

import { ApidataserviceService } from './apidataservice.service';

describe('ApidataserviceService', () => {
  let service: ApidataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
