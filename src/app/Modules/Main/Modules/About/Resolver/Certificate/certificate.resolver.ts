import {Injectable} from '@angular/core';
import {
  Resolve
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CertificateService} from "../../Services/Certificates/certificate.service";
import {ICertificate} from "../../Model/Interface/Certificate/certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificateResolver implements Resolve<ICertificate[]> {
  constructor(private certificateService: CertificateService) {
  }

  resolve(): Observable<ICertificate[]> {
    return this.certificateService.getCertificateList()
  }
}
