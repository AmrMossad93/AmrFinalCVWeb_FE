import {Component, OnInit} from '@angular/core';
import SwiperCore, {FreeMode, Navigation, Thumbs} from 'swiper';
import Swiper from "swiper";
import {IProject} from "../../../Home/Models/Interfaces/Projects/project";
import {ActivatedRoute} from "@angular/router";

Swiper.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectDetailsData = {} as IProject;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.projectDetailsData = res['projectDetailsData'];
    })
  }
}
