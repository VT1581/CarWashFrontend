import { TestBed } from '@angular/core/testing';

import { WashpackServiceService } from './washpack-service.service';

describe('WashpackServiceService', () => {
  let service: WashpackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WashpackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
