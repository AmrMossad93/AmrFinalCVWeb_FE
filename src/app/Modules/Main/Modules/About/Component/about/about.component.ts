import {Component, OnInit} from '@angular/core';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IBasicInfo} from "../../Model/Interface/AboutMe/basic-info";
import {ActivatedRoute} from "@angular/router";
import {IProgrammingSkills} from "../../Model/Interface/Skills/programming-skills";
import Swiper from "swiper";
import {ICertificate} from "../../Model/Interface/Certificate/certificate";
// @ts-ignore
import Lity from 'lity';
import {Autoplay, FreeMode, Navigation, Thumbs} from "swiper/modules";
import {IAboutMe} from "../../Model/Interface/AboutMe/about-me";
Swiper.use([FreeMode, Navigation, Thumbs, Autoplay]);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  aboutMeBriefData = {} as IAboutMe;
  basicInfoData = {} as IBasicInfo;
  programmingSkillsData = {} as IProgrammingSkills[];
  certificateData = {} as ICertificate[]
  swiper!: Swiper;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeBriefData = res['aboutMeBriefData'];
      this.basicInfoData = res['basicInfoData'];
      this.programmingSkillsData = res['programmingSkillsData'];
      this.certificateData = res['certificateData'];
    });
    this.swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 15,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      },
    });
  }

  openCertificate(path: string): void {
    Lity(path);
  }
}
