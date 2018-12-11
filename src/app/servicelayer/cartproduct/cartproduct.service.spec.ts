import { TestBed } from '@angular/core/testing';

import { CartproductService } from './cartproduct.service';

describe('CartproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartproductService = TestBed.get(CartproductService);
    expect(service).toBeTruthy();
  });
});
