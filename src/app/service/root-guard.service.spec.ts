import { TestBed } from '@angular/core/testing';

import { RootGuardService } from './root-guard.service';

describe('RootGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootGuardService = TestBed.get(RootGuardService);
    expect(service).toBeTruthy();
  });
});
