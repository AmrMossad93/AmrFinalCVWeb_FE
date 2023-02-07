import {Component, OnInit} from '@angular/core';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {ActivatedRoute} from "@angular/router";
import {IBasicInfo} from "../../Models/Interfaces/AboutMe/basic-info";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  aboutMeBriefData = {} as IBaseData<string[]>;
  basicInfoData = {} as IBaseData<IBasicInfo>

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.aboutMeBriefData = res['aboutMeBriefData'];
      this.basicInfoData = res['basicInfoData'];
    })
  }
}
