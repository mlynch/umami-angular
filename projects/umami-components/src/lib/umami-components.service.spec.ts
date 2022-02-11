import { TestBed } from '@angular/core/testing';

import { UmamiComponentsService } from './umami-components.service';

describe('UmamiComponentsService', () => {
  let service: UmamiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmamiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
