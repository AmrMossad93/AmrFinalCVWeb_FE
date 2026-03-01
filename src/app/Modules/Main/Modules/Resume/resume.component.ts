import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBase} from '../../../../Core/models/Interface/Base/base';
import {IExperience, DistributionItem} from './DTO/Interface/Experience/experience';
import {IEducation} from './DTO/Interface/Education/education';
import {IService} from './DTO/Interface/Services/services';
import {ISkill} from './DTO/Interface/Skills/skills';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: false
})
export class ResumeComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);

  yearsOfExperience: number = new Date().getFullYear() - 2017;

  skills = [
    'Angular 19+', 'TypeScript 5.x', 'JavaScript ES2024',
    'RxJS 7+', 'NgRx / Signals', 'Tailwind CSS 4.x',
    'SCSS / SASS', 'HTML5 / Semantic SEO', 'Node.js / Express',
    'Ionic 8 / Capacitor', 'Git / CI/CD Pipelines', 'Jest / Cypress',
    'Micro-frontends', 'PWA / SSR', 'Module Federation'
  ];

  experience: IExperience[] = [];
  education: IEducation[] = [];
  services: IService[] = [];
  skillsProgress: ISkill[] = [];
  projectsCount = 0;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.experience = (res['experience'] as IBase<IExperience[]>).data;
      this.education = (res['education'] as IBase<IEducation[]>).data;
      this.services = res['services'] as IService[];
      this.skillsProgress = (res['skillsProgress'] as IBase<ISkill[]>).data;
      this.projectsCount = res['projects']?.length || 0;
    });
  }

  isDistributionArray(d: string | DistributionItem[]): d is DistributionItem[] {
    return Array.isArray(d);
  }

  getDistributionText(exp: IExperience): string {
    const d = exp.distribution;
    if (typeof d === 'string') return d;
    return d.map(item => item.text).join(' ');
  }
}
