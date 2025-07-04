import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {

    isMobileNavShown: boolean = false

    toggleNav() {
        this.isMobileNavShown = !this.isMobileNavShown
    }
}
