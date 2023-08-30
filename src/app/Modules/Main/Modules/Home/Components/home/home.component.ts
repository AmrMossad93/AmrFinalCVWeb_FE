import {Component, OnInit} from '@angular/core';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {ActivatedRoute, Router} from "@angular/router";
import {IBasicInfo} from "../../Models/Interfaces/AboutMe/basic-info";
import {IProgrammingSkills} from "../../Models/Interfaces/Skills/programming-skills";
import {MatDialog} from "@angular/material/dialog";
import {ProgrammingSkillsComponent} from "../../Shared/Dialogues/programming-skills/programming-skills.component";
import {IEducation} from "../../Models/Interfaces/Education/education";
import {IExperience} from "../../Models/Interfaces/Experience/experience";
import {IProject} from "../../Models/Interfaces/Projects/project";
import {ICertificate} from "../../Models/Interfaces/Certificate/certificate";
import {ImageGalleryComponent} from "../../Shared/Dialogues/image-gallery/image-gallery.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  aboutMeBriefData = {} as IBaseData<string[]>;
  basicInfoData = {} as IBaseData<IBasicInfo>;
  programmingSkillsData = {} as IBaseData<IProgrammingSkills[]>;
  educationData = {} as IBaseData<IEducation[]>;
  experienceData = {} as IBaseData<IExperience[]>;
  projectListData = {} as IBaseData<IProject[]>;
  latestProject = {} as IProject;
  isShowMore = true;
  countOfShowExperience: number = 3;
  certificateData = {} as IBaseData<ICertificate[]>

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeBriefData = res['aboutMeBriefData'];
      this.basicInfoData = res['basicInfoData'];
      this.programmingSkillsData = res['programmingSkillsData'];
      this.educationData = res['educationData'];
      this.experienceData = res['experienceData'];
      this.projectListData = res['projectListData'];
      this.certificateData = res['certificateData'];
      // @ts-ignore
      this.latestProject = this.projectListData.data.at(-1);
    })
  }

  viewAllProgrammingSkills(): void {
    this.dialog.open(ProgrammingSkillsComponent, {
      width: '70vw',
      maxHeight: '95vh',
      data: {
        programmingSkillsData: this.programmingSkillsData.data
      }
    });
  }

  toggleShowMoreExperience(): void {
    this.isShowMore = !this.isShowMore;
    if (!this.isShowMore) {
      this.countOfShowExperience = this.experienceData.data.length;
    } else {
      this.countOfShowExperience = 3;
    }
  }

  onNavigateToProjectList(): void {
    this.router.navigate(['main', 'projects'])
  }

  getCertificate(certificate: ICertificate): void {
    this.dialog.open(ImageGalleryComponent, {
      width: '70vw',
      maxHeight: '95vh',
      maxWidth: '640px',
      data: {
        imageName: 'Certificates',
        imageList: this.certificateData.data.map(c => {
          return {
            name: c.certificateName,
            path: c.certificatePath
          }
        }),
        activeIndex: this.certificateData.data.findIndex(c => c === certificate)
      }
    });
  }
}
