import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {About} from '../../Services/About/about';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IBasicInfo} from '../../DTO/Interface/BasicInfo/basic-info';

export const basicInfoResolver: ResolveFn<IBase<IBasicInfo>> = () => {
  return inject(About).getBasicInfo();
};
