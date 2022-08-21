import { TestBed } from '@angular/core/testing';

import { ServiceToasterService } from './service-toaster.service';

describe('ServiceToasterService', () => {
  let service: ServiceToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
