import { TestBed } from '@angular/core/testing';

import { DataSearchService } from './data-search.service';

describe('DataSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSearchService = TestBed.get(DataSearchService);
    expect(service).toBeTruthy();
  });
});
