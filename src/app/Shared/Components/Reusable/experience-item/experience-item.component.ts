import {Component, Input} from '@angular/core';
import {IExperience} from "../../../../Modules/Main/Modules/Home/Models/Interfaces/Experience/experience";

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
  @Input() experience = {} as IExperience;
}
