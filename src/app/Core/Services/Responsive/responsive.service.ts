import {Injectable, NgZone} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {
    isMobile: boolean = false;
    isTablet: boolean = false;
    isDesktop: boolean = false;

    constructor(private ngZone: NgZone) {
        ngZone.run(() => {
            this.onResize(window.innerWidth)
        });
    }


    onResize(mediaQueries: number) {
        if (mediaQueries <= 767.98) {
            this.isMobile = true;
            this.isTablet = false;
            this.isDesktop = false;
        } else if (mediaQueries >= 768 && mediaQueries <= 991.98) {
            this.isMobile = false;
            this.isTablet = true;
            this.isDesktop = false;
        } else if (mediaQueries >= 992) {
            this.isMobile = false;
            this.isTablet = false;
            this.isDesktop = true;
        }
    }
}
