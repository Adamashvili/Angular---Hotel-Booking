import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotelsService } from '../../services/hotelsApi.service';


@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css'],
    standalone: true,
    imports: [RouterLink]
})
export class HotelsComponent implements OnInit {
  constructor(private hotelApiHttp: HotelsService) {}

 hotels: any = []


 ngOnInit(): void {
  window.scrollTo(0, 0)
   this.getAllHotels()
 }

 getAllHotels() {
  this.hotelApiHttp.getHotels().subscribe({
    next: (res) => this.hotels = res,
    error: () => this.hotels = []
  })
 }

}
