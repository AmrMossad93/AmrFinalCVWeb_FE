import {Component, Input} from '@angular/core';
import {IProject} from "../../../../Modules/Main/Modules/Home/Models/Interfaces/Projects/project";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project = {} as IProject;
}
