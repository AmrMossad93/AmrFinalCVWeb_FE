import {Component, inject, OnInit, HostListener} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBase} from '../../../../Core/models/Interface/Base/base';
import {IBasicInfo} from './DTO/Interface/BasicInfo/basic-info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: false
})
export class AboutComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  public basicInfo = {} as IBase<IBasicInfo>
  yearsOfExperience: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cards = document.querySelectorAll('.pro-card');
    cards.forEach((card: any) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    // Advanced Image Tilt Effect
    const imageContainer = document.querySelector('.interactive-image-container') as HTMLElement;
    if (imageContainer) {
      const rect = imageContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = (centerY - e.clientY) / 25;
      const rotateY = (e.clientX - centerX) / 25;
      
      imageContainer.style.setProperty('--rotate-x', `${rotateX}deg`);
      imageContainer.style.setProperty('--rotate-y', `${rotateY}deg`);
    }
  }

  certificates = [
    {
      name: 'AI Workshop',
      path: 'Images/Cir/69a65449-c2d5-412f-a666-b21cf9b9a701.jpg'
    },
    {
      name: 'Developing ASP.NET MVC 4 Web Applications',
      path: 'Images/Cir/20200131230628761_Page_01.jpg'
    },
    {
      name: 'Programming in HTML5 with JavaScript and CSS3',
      path: 'Images/Cir/20200131230628761_Page_02.jpg'
    },
    {
      name: 'Developing Windows Azure and Web Services',
      path: 'Images/Cir/20200131230628761_Page_03.jpg'
    },
    {
      name: 'Microsoft Web Development Diploma',
      path: 'Images/Cir/20200131230628761_Page_04.jpg'
    },
    {
      name: 'MCSD: App Builder Solutions Developer',
      path: 'Images/Cir/20200131230628761_Page_05.jpg'
    },
    {
      name: 'Mean Stack & IONIC',
      path: 'Images/Cir/20200131230628761_Page_06.jpg'
    },
    {
      name: 'Certificate of Congratulations',
      path: 'Images/Cir/20200131230628761_Page_07.jpg'
    },
    {
      name: 'Training College Britain',
      path: 'Images/Cir/20200131230628761_Page_09.jpg'
    },
    {
      name: 'Cyber Security',
      path: 'Images/Cir/Cyper.png'
    }
  ];

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.basicInfo = res['basicInfo'];
      this.yearsOfExperience = new Date().getFullYear() - this.basicInfo.data.graduatedYear
    })
  }

}
