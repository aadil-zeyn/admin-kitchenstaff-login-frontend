import { TestBed } from '@angular/core/testing';

import { KitchenStaffService } from './kitchen-staff.service';

describe('KitchenStaffService', () => {
  let service: KitchenStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
