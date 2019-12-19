import { TestBed } from '@angular/core/testing';

import { AuthenticationserviceService } from './authenticationservice.service';

describe('AuthenticationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationserviceService = TestBed.get(AuthenticationserviceService);
    expect(service).toBeTruthy();
  });
});
