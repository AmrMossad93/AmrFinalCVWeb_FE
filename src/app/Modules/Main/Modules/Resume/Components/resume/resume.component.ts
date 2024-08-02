import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IEducation} from "../../Model/Interface/Education/education";
import {IExperience} from "../../Model/Interface/Experience/experience";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  educationData = [] as IEducation[];
  experienceData = {} as IExperience[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.educationData = res['educationData'];
      this.experienceData = res['experienceData'];
    });
  }
}
