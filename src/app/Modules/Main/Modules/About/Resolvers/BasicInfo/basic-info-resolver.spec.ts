import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { basicInfoResolver } from './basic-info-resolver';

describe('basicInfoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => basicInfoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
