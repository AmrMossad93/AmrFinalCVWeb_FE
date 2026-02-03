import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {
    }

  getJson<T>(jsonFileName: string): Observable<T> {
    return this.http.get<T>('Data/' + jsonFileName);
  }
}
