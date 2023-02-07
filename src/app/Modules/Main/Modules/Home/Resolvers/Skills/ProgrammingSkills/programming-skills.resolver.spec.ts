import { TestBed } from '@angular/core/testing';

import { ProgrammingSkillsResolver } from './programming-skills.resolver';

describe('ProgrammingSkillsResolver', () => {
  let resolver: ProgrammingSkillsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProgrammingSkillsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
