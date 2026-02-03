import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {HeroService} from '../../Services/Hero/hero-service';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IHeader} from '../../DTO/Interface/Header/header';

export const headerResolver: ResolveFn<IBase<IHeader>> = () => {
  return inject(HeroService).getHeader();
};
