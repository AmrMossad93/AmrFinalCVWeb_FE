import { TestBed } from '@angular/core/testing';

import { ExperienceResolver } from './experience.resolver';

describe('ExperienceResolver', () => {
  let resolver: ExperienceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExperienceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
