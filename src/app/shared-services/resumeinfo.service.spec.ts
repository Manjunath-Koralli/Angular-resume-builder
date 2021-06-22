import { TestBed } from '@angular/core/testing';

import { ResumeinfoService } from './resumeinfo.service';

describe('ResumeinfoService', () => {
  let service: ResumeinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
