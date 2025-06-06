import { TestBed } from '@angular/core/testing';

import { ClenteService } from './clente.service';

describe('ClenteService', () => {
  let service: ClenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
