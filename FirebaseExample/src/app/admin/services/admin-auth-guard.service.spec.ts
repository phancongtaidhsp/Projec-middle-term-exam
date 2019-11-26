import { AdminAuthGuard } from './admin-auth-guard.service';
import { TestBed } from '@angular/core/testing';

describe('AdminAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthGuard = TestBed.get(AdminAuthGuard);
    expect(service).toBeTruthy();
  });
});
