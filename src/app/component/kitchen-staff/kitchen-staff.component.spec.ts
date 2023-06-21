import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenStaffComponent } from './kitchen-staff.component';

describe('KitchenStaffComponent', () => {
  let component: KitchenStaffComponent;
  let fixture: ComponentFixture<KitchenStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenStaffComponent]
    });
    fixture = TestBed.createComponent(KitchenStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
