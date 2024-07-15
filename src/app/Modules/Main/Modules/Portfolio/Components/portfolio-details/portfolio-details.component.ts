import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProject} from "../../Model/Interface/Projects/project";
import {Autoplay, FreeMode, Navigation, Thumbs} from "swiper/modules";
import Swiper from "swiper";
import {ResponsiveService} from "../../../../../../Core/Services/Responsive/responsive.service";

Swiper.use([FreeMode, Navigation, Thumbs, Autoplay]);

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent implements OnInit {
  projectDetailsData = {} as IProject;
  swiper!: Swiper;

  constructor(private activatedRoute: ActivatedRoute, public responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.projectDetailsData = res['projectDetailsData'];
    });

    this.swiper = new Swiper(".swiper", {
      "loop": true,
      "speed": 600,
      "autoplay": {
        "delay": 5000
      },
      "slidesPerView": "auto",
      "navigation": {
        "nextEl": ".swiper-button-next",
        "prevEl": ".swiper-button-prev"
      },
      "pagination": {
        "el": ".swiper-pagination",
        "type": "bullets",
        "clickable": true
      }
    });
  }
}
