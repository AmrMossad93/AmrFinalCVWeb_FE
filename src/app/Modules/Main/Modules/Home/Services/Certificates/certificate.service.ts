import {Injectable} from '@angular/core';
import {DataService} from "../../../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {CERTIFICATE} from "../../Models/Constants/API_NAME";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {ICertificate} from "../../Models/Interfaces/Certificate/certificate";

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
