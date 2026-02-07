import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from './DTO/Interface/Project/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  standalone: false
})
export class PortfolioComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);

  allProjects: IProject[] = [];
  projects: IProject[] = [];
  totalProjects = 0;
  currentPage = 1;
  pageSize = 12;

  categories: string[] = [];
  technologies: string[] = [];

  selectedCategory = '';
  selectedTech = '';
  searchQuery = '';
  sortBy = 'newest';

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.allProjects = res['projectsData'];
      this.categories = res['categories'];
      this.technologies = res['technologies'];
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let filtered = [...this.allProjects];

    // Filter by category
    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    // Filter by tech
    if (this.selectedTech) {
      filtered = filtered.filter(p => p.technologies.includes(this.selectedTech));
    }

    // Filter by search query
    if (this.searchQuery) {
      const s = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(s) ||
        p.description.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s) ||
        (p.client && p.client.toLowerCase().includes(s)) ||
        p.technologies.some(t => t.toLowerCase().includes(s))
      );
    }

    // Sorting
    if (this.sortBy === 'newest') {
      filtered.sort((a, b) => Number(b.id) - Number(a.id));
    } else if (this.sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.totalProjects = filtered.length;

    // Apply manual pagination
    const start = (this.currentPage - 1) * this.pageSize;
    this.projects = filtered.slice(start, start + this.pageSize);
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  onSortChange(value: string): void {
    this.sortBy = value;
    this.applyFilters();
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.applyFilters();
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
