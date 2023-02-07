import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IBaseData} from "../../../../Core/Model/Interface/Base/base-data";
import {IHeader} from "../../Models/Interface/header";
import {HeaderService} from "../../Service/Header/header.service";

@Injectable({
  providedIn: 'root'
})
export class HeaderResolver implements Resolve<IBaseData<IHeader>> {
  constructor(private headerService: HeaderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBaseData<IHeader>> {
    return this.headerService.getHeader()
  }
}
