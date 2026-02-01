import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../Core/services/project.service';
import { Project } from '../../../../Core/models/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  standalone: false
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];
  totalProjects = 0;
  currentPage = 1;
  pageSize = 12;
  
  categories: string[] = [];
  technologies: string[] = [];
  
  selectedCategory = '';
  selectedTech = '';
  searchQuery = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.categories = this.projectService.getAllCategories();
    this.technologies = this.projectService.getAllTechnologies();
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects(
      this.currentPage,
      this.pageSize,
      this.selectedCategory,
      this.selectedTech,
      this.searchQuery
    ).subscribe((result: { projects: Project[], total: number }) => {
      this.projects = result.projects;
      this.totalProjects = result.total;
    });
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadProjects();
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1;
    this.loadProjects();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadProjects();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get totalPages(): number {
    return Math.ceil(this.totalProjects / this.pageSize);
  }

  get pages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
