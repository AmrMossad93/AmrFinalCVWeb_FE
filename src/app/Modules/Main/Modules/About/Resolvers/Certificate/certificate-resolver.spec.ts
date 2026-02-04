import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { certificateResolver } from './certificate-resolver';

describe('certificateResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => certificateResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
