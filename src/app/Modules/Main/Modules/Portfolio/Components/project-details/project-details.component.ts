import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../../DTO/Interface/Project/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  standalone: false
})
export class ProjectDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  project?: IProject;
  loading = true;
  activeImageIndex = 0;
  isLightboxOpen = false;

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.project = res['project'];
      if (!this.project) {
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
