import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAuctionsComponent } from './upcoming-auctions.component';

describe('UpcomingAuctionsComponent', () => {
  let component: UpcomingAuctionsComponent;
  let fixture: ComponentFixture<UpcomingAuctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingAuctionsComponent]
    });
    fixture = TestBed.createComponent(UpcomingAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
