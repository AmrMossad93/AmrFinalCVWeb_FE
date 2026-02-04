import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../Core/services/Data/data.service';
import { IBase } from '../../../../Core/models/Interface/Base/base';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: false
})
export class ResumeComponent implements OnInit {
  yearsOfExperience: number = new Date().getFullYear() - 2017;
  
  skills = [
    'Angular 19+', 'TypeScript 5.x', 'JavaScript ES2024', 
    'RxJS 7+', 'NgRx / Signals', 'Tailwind CSS 4.x', 
    'SCSS / SASS', 'HTML5 / Semantic SEO', 'Node.js / Express', 
    'Ionic 8 / Capacitor', 'Git / CI/CD Pipelines', 'Jest / Cypress', 
    'Micro-frontends', 'PWA / SSR', 'Module Federation'
  ];

  experience: any[] = [];
  education: any[] = [];
  services: any[] = [];
  skillsProgress: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    forkJoin({
      experience: this.dataService.getJson<IBase<any[]>>('experience.json'),
      education: this.dataService.getJson<IBase<any[]>>('education.json'),
      services: this.dataService.getJson<any[]>('services.json'),
      skillsProgress: this.dataService.getJson<IBase<any[]>>('programmingSkillsProgress.json')
    }).subscribe({
      next: (res) => {
        this.experience = res.experience.data;
        this.education = res.education.data;
        this.services = res.services;
        this.skillsProgress = res.skillsProgress.data;
      },
      error: (err) => {
        console.error('Error fetching resume data:', err);
      }
    });
  }
}
