import { TestBed } from '@angular/core/testing';

import { MfeUtilsAngularService } from './mfe-utils-angular.service';

describe('MfeUtilsAngularService', () => {
  let service: MfeUtilsAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeUtilsAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
