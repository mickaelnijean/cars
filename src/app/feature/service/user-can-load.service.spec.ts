import { TestBed } from '@angular/core/testing';

import { UserCanLoadService } from './user-can-load.service';

describe('UserCanLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCanLoadService = TestBed.get(UserCanLoadService);
    expect(service).toBeTruthy();
  });
});
