import {Component, inject, OnInit, HostListener} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBase} from '../../../../Core/models/Interface/Base/base';
import {IBasicInfo} from './DTO/Interface/BasicInfo/basic-info';
import {ICertificate} from './DTO/Interface/Certificate/certificate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: false
})
export class AboutComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  public basicInfo = {} as IBase<IBasicInfo>;
  public certificateList = {} as IBase<ICertificate[]>;
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

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.basicInfo = res['basicInfo'];
      this.certificateList = res['certificateList'];
      this.yearsOfExperience = new Date().getFullYear() - this.basicInfo.data.graduatedYear
    })
  }

}
