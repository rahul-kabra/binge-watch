import { TestBed } from '@angular/core/testing';

import { DataMovieService } from './data-movie.service';

describe('DataMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMovieService = TestBed.get(DataMovieService);
    expect(service).toBeTruthy();
  });
});
