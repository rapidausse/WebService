import { TestBed } from '@angular/core/testing';

import { GouvServiceService } from './gouv-service.service';

describe('GouvServiceService', () => {
  let service: GouvServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GouvServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
