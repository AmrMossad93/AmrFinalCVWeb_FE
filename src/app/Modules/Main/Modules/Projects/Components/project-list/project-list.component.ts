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
  categories: string[] = []
  selectedCategory: string = 'All';
  filteredProjects: IProject[] = []

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.projectListData = res['projectListData'];
      this.filteredProjects = this.projectListData.data;
      this.categories = ['All', ...new Set(this.projectListData.data.map(c => c.category))]
    })
  }

  checkSelectedCategory(category: string): boolean {
    return this.selectedCategory === category
  }

  filterCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projectListData.data;
    } else {
      this.filteredProjects = this.projectListData.data.filter(c => c.category === category)
    }
  }
}
