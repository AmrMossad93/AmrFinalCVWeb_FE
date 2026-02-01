import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  standalone: false
})
export class ResumeComponent {
  yearsOfExperience: number = new Date().getFullYear() - 2017;
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Node.js', 'RxJS', 'Git', 'REST APIs', 'Unit Testing', 'Responsive Design'];

  experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead developer for enterprise-scale Angular applications, mentoring junior developers and implementing best practices for code quality and performance.'
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Web Studio',
      period: '2019 - 2022',
      description: 'Developed responsive user interfaces for various clients, focusing on modern web standards and exceptional user experiences.'
    }
  ];

  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2019'
    }
  ];
}
