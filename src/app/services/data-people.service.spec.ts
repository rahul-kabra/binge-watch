import { TestBed } from '@angular/core/testing';

import { DataPeopleService } from './data-people.service';

describe('DataPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPeopleService = TestBed.get(DataPeopleService);
    expect(service).toBeTruthy();
  });
});
