import { TestBed } from '@angular/core/testing';

import { EducationResolver } from './education.resolver';

describe('EducationResolver', () => {
  let resolver: EducationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EducationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
