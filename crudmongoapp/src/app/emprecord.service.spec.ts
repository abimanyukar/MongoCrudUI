import { TestBed } from '@angular/core/testing';

import { EmprecordService } from './emprecord.service';

describe('EmprecordService', () => {
  let service: EmprecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
