import {inject, Injectable} from '@angular/core';
import {DataService} from '../../../../../../Core/services/Data/data.service';
import {Observable} from 'rxjs';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IBasicInfo} from '../../DTO/Interface/BasicInfo/basic-info';
import {ABOUT_API_NAME} from '../../DTO/API/ABOUT_API_NAME';

@Injectable({
  providedIn: 'root',
})
export class About {
  private readonly dataService = inject(DataService);

  getBasicInfo(): Observable<IBase<IBasicInfo>> {
    return this.dataService.getJson<IBase<IBasicInfo>>(ABOUT_API_NAME.BASIC_INFO)
  }
}
