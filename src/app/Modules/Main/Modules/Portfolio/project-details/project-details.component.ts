import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../../Core/services/project.service';
import { Project } from '../../../../../Core/models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  standalone: false
})
export class ProjectDetailsComponent implements OnInit {
  project?: Project;
  loading = true;
  activeImageIndex = 0;
  isLightboxOpen = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadProject(id);
      }
    });
  }

  loadProject(id: string): void {
    this.loading = true;
    this.projectService.getProjectById(id).subscribe((project: Project | undefined) => {
      if (project) {
        this.project = project;
      } else {
        this.router.navigate(['/portfolio']);
      }
      this.loading = false;
    });
  }

  goBack(): void {
    this.router.navigate(['/portfolio']);
  }

  nextImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (!this.project) return;
    this.activeImageIndex = (this.activeImageIndex + 1) % this.project.gallery.length;
  }

  prevImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (!this.project) return;
    this.activeImageIndex = (this.activeImageIndex - 1 + this.project.gallery.length) % this.project.gallery.length;
  }

  openLightbox(): void {
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.isLightboxOpen = false;
    document.body.style.overflow = 'auto';
  }
}
