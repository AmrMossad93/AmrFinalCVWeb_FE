import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../../DTO/Interface/Project/project';
import { Fancybox } from "@fancyapps/ui";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  standalone: false
})
export class ProjectDetailsComponent implements OnInit, AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  project?: IProject;
  loading = true;
  activeImageIndex = 0;

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.project = res['project'];
      if (!this.project) {
        this.router.navigate(['/portfolio']);
      }
      this.loading = false;
    });
  }

  ngAfterViewInit(): void {
    (Fancybox as any).bind("[data-fancybox='project-gallery']", {
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "zoomIn",
            "zoomOut",
            "fullScreen",
            "prev",
            "next",
          ],
          right: ["slideshow", "download", "thumbs", "close"],
        },
      },
      Images: {
        Panzoom: {
          maxScale: 2,
        },
      },
      showClass: "fancybox-fadeIn",
      hideClass: "fancybox-fadeOut",
      animated: true,
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
}
