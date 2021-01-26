import { TestBed } from '@angular/core/testing';

import { CarRepositoryService } from './car-repository.service';

describe('CarRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarRepositoryService = TestBed.get(CarRepositoryService);
    expect(service).toBeTruthy();
  });
});
