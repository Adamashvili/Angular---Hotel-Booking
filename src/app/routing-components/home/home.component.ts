import { Component, OnInit } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [BannerComponent, HotelsComponent]
})
export class HomeComponent {
}
