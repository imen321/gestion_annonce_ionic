import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelaisAdsPage } from './delais-ads.page';

describe('DelaisAdsPage', () => {
  let component: DelaisAdsPage;
  let fixture: ComponentFixture<DelaisAdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DelaisAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
