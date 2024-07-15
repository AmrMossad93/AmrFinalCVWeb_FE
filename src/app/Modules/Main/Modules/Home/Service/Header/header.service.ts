import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HEADER_API} from "../../Models/Constants/APIName/APIName";
import {IHeader} from "../../Models/Interface/header";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {DataService} from "../../../../../../Core/Services/Data/data.service";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private dataService: DataService) {
  }

  getHeader(): Observable<IBaseData<IHeader>> {
    return this.dataService.get(HEADER_API);
  }
}
