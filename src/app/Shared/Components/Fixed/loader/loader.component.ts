import { Component, inject, computed, signal, effect, OnDestroy } from '@angular/core';
import { LoaderService } from '../../../../Core/services/loader/loader.service';

/** Loader overlay with matrix background and spinner. */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: false,
})
export class LoaderComponent implements OnDestroy {
  private readonly loaderService = inject(LoaderService);

  readonly visible = computed(() => this.loaderService.isLoading());

  /** Delay matrix mount so overlay is painted first and canvas initializes correctly. */
  readonly showMatrix = signal(false);
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const v = this.visible();
      if (v) {
        this.timeoutId = setTimeout(() => this.showMatrix.set(true), 50);
      } else {
        if (this.timeoutId != null) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
        this.showMatrix.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.timeoutId != null) {
      clearTimeout(this.timeoutId);
    }
  }
}
