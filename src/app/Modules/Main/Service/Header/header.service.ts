import {Injectable} from '@angular/core';
import {DataService} from "../../../../Core/Service/Data/data.service";
import {Observable} from "rxjs";
import {HEADER_API} from "../../Models/Constants/APIName/APIName";
import {IBaseData} from "../../../../Core/Model/Interface/Base/base-data";
import {IHeader} from "../../Models/Interface/header";

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
