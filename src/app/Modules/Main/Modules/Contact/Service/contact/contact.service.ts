import { Injectable } from "@angular/core";
import {
  IInquiry,
  IInquiryResponse,
} from "../../DTO/Interface/Inquiry/inquiry";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CONTACT_US_API_NAME } from "../../DTO/API/CONTACT_US_API_NAME";
import { environment } from "../../../../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  sendInquiry(data: IInquiry): Observable<IInquiryResponse> {
    let reqOBJ = `name=${data.fullName}&email=${data.email}&subject=${data.subject}&message=${data.message}`;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    };

    return this.httpClient.post<IInquiryResponse>(
      CONTACT_US_API_NAME.POST_INQUIRY + environment.formSpreeId,
      reqOBJ,
      httpOptions
    );
  }
}
