import { TestBed } from '@angular/core/testing';

import { CvsilvatariktService } from './cvsilvatarik.service';

describe('CvsilvatariktService', () => {
  let service: CvsilvatariktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvsilvatariktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
