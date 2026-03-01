import { inject } from '@angular/core';
import {
  type HttpInterceptorFn,
  type HttpRequest,
  type HttpHandlerFn,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../Core/services/loader/loader.service';

/**
 * HTTP interceptor that shows the global loader on request start
 * and hides it when the request completes (success or error).
 */
export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const loader = inject(LoaderService);
  loader.show();
  return next(req).pipe(finalize(() => loader.hide()));
};
