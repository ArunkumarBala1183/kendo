import { TestBed } from '@angular/core/testing';

import { UpcomingAuctionsService } from './upcoming-auctions.service';

describe('UpcomingAuctionsService', () => {
  let service: UpcomingAuctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingAuctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
