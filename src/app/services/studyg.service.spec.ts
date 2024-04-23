import { TestBed } from '@angular/core/testing';

import { StudygService } from './studyg.service';

describe('StudygService', () => {
  let service: StudygService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudygService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
