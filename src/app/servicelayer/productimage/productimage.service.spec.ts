import { TestBed } from '@angular/core/testing';

import { ProductimageService } from './productimage.service';

describe('ProductimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductimageService = TestBed.get(ProductimageService);
    expect(service).toBeTruthy();
  });
});
