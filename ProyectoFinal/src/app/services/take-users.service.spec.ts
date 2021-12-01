import { TestBed } from '@angular/core/testing';

import { TakeUsersService } from './take-users.service';

describe('TakeUsersService', () => {
  let service: TakeUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
