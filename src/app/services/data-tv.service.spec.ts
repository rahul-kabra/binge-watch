import { TestBed } from '@angular/core/testing';

import { DataTvService } from './data-tv.service';

describe('DataTvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTvService = TestBed.get(DataTvService);
    expect(service).toBeTruthy();
  });
});
