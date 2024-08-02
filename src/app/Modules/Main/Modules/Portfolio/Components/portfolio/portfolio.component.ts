import {Component, OnInit} from '@angular/core';
import {IBaseData} from "../../../../../../Core/Model/Interface/Base/base-data";
import {ActivatedRoute} from "@angular/router";
import {IProject} from "../../Model/Interface/Projects/project";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  projectListData = {} as IProject[];
  categories: string[] = []
  selectedCategory: string = 'All';
  filteredProjects: IProject[] = []

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.projectListData = res['projectListData'];
      this.filteredProjects = this.projectListData;
      this.categories = ['All', ...new Set(this.projectListData.map(c => c.category))]
    });
  }
  checkSelectedCategory(category: string): boolean {
    return this.selectedCategory === category
  }

  filterCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projectListData;
    } else {
      this.filteredProjects = this.projectListData.filter(c => c.category === category)
    }
  }
}
