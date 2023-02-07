import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {IProject} from "../../../Home/Models/Interfaces/Projects/project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projectListData = {} as IBaseData<IProject[]>;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.projectListData = res['projectListData'];
    })
  }
}
