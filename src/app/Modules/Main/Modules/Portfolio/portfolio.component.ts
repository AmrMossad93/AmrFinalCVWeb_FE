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
  sortBy = 'newest';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllCategories().subscribe(cats => this.categories = cats);
    this.projectService.getAllTechnologies().subscribe(techs => this.technologies = techs);
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects(
      1, // Always load all for client-side sorting/pagination if needed, or stick to page-based
      1000, // Load a large set to handle sorting properly for now
      this.selectedCategory,
      this.selectedTech,
      this.searchQuery
    ).subscribe((result: { projects: Project[], total: number }) => {
      let filtered = [...result.projects];
      
      // Sorting
      if (this.sortBy === 'newest') {
        filtered.sort((a, b) => Number(b.id) - Number(a.id));
      } else if (this.sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }
      
      this.totalProjects = filtered.length;
      
      // Apply manual pagination on the filtered/sorted list
      const start = (this.currentPage - 1) * this.pageSize;
      this.projects = filtered.slice(start, start + this.pageSize);
    });
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.loadProjects();
  }

  onSortChange(value: string): void {
    this.sortBy = value;
    this.loadProjects();
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
