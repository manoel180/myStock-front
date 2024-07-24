/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UserAuthService } from './userAuthService';

describe('Service: UserAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthService]
    });
  });

  it('should ...', inject([UserAuthService], (service: UserAuthService) => {
    expect(service).toBeTruthy();
  }));
});
