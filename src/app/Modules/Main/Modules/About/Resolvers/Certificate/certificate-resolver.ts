import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {About} from '../../Services/About/about';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {ICertificate} from '../../DTO/Interface/Certificate/certificate';

export const certificateResolver: ResolveFn<IBase<ICertificate[]>> = () => {
  return inject(About).getCertificates();
};
