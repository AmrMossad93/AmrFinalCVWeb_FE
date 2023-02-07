import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  get(API_NAME: string): Observable<any> {
    return this.httpClient.get(environment.jsonFilesEndPoint + API_NAME);
  }
}
