/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SessionService } from './sessionService.service';

describe('Service: SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
  });

  it('should ...', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
