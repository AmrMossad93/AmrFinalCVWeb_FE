import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { basicInfoResolver } from './basic-info-resolver';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IBasicInfo} from '../../DTO/Interface/BasicInfo/basic-info';

describe('basicInfoResolver', () => {
  const executeResolver: ResolveFn<IBase<IBasicInfo>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => basicInfoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
