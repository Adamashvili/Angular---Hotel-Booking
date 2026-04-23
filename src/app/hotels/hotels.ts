import { Component, signal } from '@angular/core';
import { ApiLinks } from '../api-links';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hotels',
  imports: [RouterLink],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css',
})
export class Hotels {
   constructor(private hotelApiHttp: ApiLinks) {}

 hotels = signal<any>([])


 ngOnInit(): void {
  window.scrollTo(0, 0)
   this.getAllHotels()
 }

 getAllHotels() {
  this.hotelApiHttp.getAllHotels().subscribe({
    next: (res) => this.hotels.set(res),
    error: () => this.hotels.set([])
  })
 }

}
