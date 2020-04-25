import { TestBed } from '@angular/core/testing';

import { GitUserSearchService } from './git-user-search.service';

describe('GitUserSearchService', () => {
  let service: GitUserSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUserSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
