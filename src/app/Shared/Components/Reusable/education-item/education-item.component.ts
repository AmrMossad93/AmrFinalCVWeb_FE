import {Component, Input} from '@angular/core';
import {IEducation} from "../../../../Modules/Main/Modules/Home/Models/Interfaces/Education/education";

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent {
  @Input() education = {} as IEducation;
}
