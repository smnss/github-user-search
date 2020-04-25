import { TestBed } from '@angular/core/testing';

import { PaginaterService } from './paginater.service';

describe('PaginaterService', () => {
  let service: PaginaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
