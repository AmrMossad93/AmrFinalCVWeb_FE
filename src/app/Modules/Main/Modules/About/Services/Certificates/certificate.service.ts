import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";
import {ICertificate} from "../../Model/Interface/Certificate/certificate";
import {CERTIFICATE} from "../../Model/Constants/ABOUT_ME_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private dataService: DataService) {
  }

  getCertificateList(): Observable<IBaseData<ICertificate[]>> {
    return this.dataService.get(CERTIFICATE.LIST)
  }
}
