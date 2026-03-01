import { Injectable, signal, computed } from '@angular/core';

/**
 * Centralized loader state for API requests.
 * Tracks concurrent request count and exposes a single isLoading flag.
 */
@Injectable({ providedIn: 'root' })
export class LoaderService {
  private readonly activeCount = signal(0);

  /** True when at least one API request is in progress. */
  readonly isLoading = computed(() => this.activeCount() > 0);

  /** Call when a request starts. */
  show(): void {
    this.activeCount.update((c) => c + 1);
  }

  /** Call when a request ends (success or error). */
  hide(): void {
    this.activeCount.update((c) => Math.max(0, c - 1));
  }
}
