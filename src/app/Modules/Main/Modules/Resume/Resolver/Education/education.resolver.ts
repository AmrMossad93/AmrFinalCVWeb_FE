import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {EducationService} from "../../Services/Education/education.service";
import {IEducation} from "../../Model/Interface/Education/education";

@Injectable({
  providedIn: 'root'
})
export class EducationResolver implements Resolve<IEducation[]> {
  constructor(private educationService:EducationService) {
  }
  resolve(): Observable<IEducation[]> {
    return this.educationService.getEducationList()
  }
}
