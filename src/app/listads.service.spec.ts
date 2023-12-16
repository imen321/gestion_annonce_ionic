import { TestBed } from '@angular/core/testing';

import { ListadsService } from './listads.service';

describe('ListadsService', () => {
  let service: ListadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
