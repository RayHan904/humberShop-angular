import { TestBed } from '@angular/core/testing';

import { IndividualProductService } from './individual-product.service';

describe('IndividualProductService', () => {
  let service: IndividualProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
