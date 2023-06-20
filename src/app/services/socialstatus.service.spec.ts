import { TestBed } from '@angular/core/testing';

import { SocialstatusService } from './socialstatus.service';

describe('SocialstatusService', () => {
  let service: SocialstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
