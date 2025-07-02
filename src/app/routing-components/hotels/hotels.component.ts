import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotelsApi.service';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css'],
    standalone: false
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
    next: (res) => this.hotels = res
  })
 }

}
