import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from '../../Service/Loader/loader.service';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  calls: number = 0;

  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    this.calls++;
    return next.handle(request).pipe(
      tap(console.log),
      finalize(() => {
        this.calls--;
        if (this.calls === 0) {
          this.loaderService.hide();
        }
      })
    );
  }
}
