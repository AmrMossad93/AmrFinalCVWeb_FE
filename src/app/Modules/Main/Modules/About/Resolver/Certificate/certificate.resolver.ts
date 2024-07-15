import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CertificateService} from "../../Services/Certificates/certificate.service";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {ICertificate} from "../../Model/Interface/Certificate/certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificateResolver implements Resolve<IBaseData<ICertificate[]>> {
  constructor(private certificateService: CertificateService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<ICertificate[]>> {
    return this.certificateService.getCertificateList()
  }
}
