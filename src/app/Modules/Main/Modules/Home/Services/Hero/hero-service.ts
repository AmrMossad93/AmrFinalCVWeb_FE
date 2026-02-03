import {inject, Injectable} from '@angular/core';
import {DataService} from '../../../../../../Core/services/Data/data.service';
import {Observable} from 'rxjs';
import {IBase} from '../../../../../../Core/models/Interface/Base/base';
import {IHeader} from '../../DTO/Interface/Header/header';
import {HERO_API_NAME} from '../../DTO/API/HERO_API_NAME';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly dataService = inject(DataService);

  getHeader(): Observable<IBase<IHeader>> {
    return this.dataService.getJson<IBase<IHeader>>(HERO_API_NAME.HEADER);
  }
}
