import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAdsPage } from './add-ads.page';

describe('AddAdsPage', () => {
  let component: AddAdsPage;
  let fixture: ComponentFixture<AddAdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
