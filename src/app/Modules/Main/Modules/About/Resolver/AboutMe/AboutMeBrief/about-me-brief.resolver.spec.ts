import { TestBed } from '@angular/core/testing';

import { AboutMeBriefResolver } from './about-me-brief.resolver';

describe('AboutMeBriefResolver', () => {
  let resolver: AboutMeBriefResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AboutMeBriefResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
