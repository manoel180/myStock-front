/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketDashboardService } from './socketDashboard.service';

describe('Service: SocketDashboard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketDashboardService]
    });
  });

  it('should ...', inject([SocketDashboardService], (service: SocketDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
