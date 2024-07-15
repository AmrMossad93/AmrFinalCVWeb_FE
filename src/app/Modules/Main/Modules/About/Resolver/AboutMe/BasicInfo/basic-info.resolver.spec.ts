import { TestBed } from '@angular/core/testing';

import { BasicInfoResolver } from './basic-info.resolver';

describe('BasicInfoResolver', () => {
  let resolver: BasicInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BasicInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
