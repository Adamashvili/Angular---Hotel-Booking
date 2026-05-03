import { Component, signal } from '@angular/core';
import { ApiLinks } from '../api-links';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Filterform } from './filterform/filterform';

@Component({
  selector: 'app-hotel-rooms',
  imports: [CommonModule, Filterform],
  templateUrl: './hotel-rooms.html',
  styleUrl: './hotel-rooms.css',
})
export class HotelRooms {
  constructor(
    private service: ApiLinks,
    private actR: ActivatedRoute,
  ) {
    this.getHotelRooms();
  }

  hotelData = signal<any>({});
  hotelRooms = signal<any[]>([]);
  errText = signal<string>('');

  getHotelRooms() {
    this.actR.params.subscribe((data: Params) => {
      this.service.getHotelRooms(data['id']).subscribe({
        next: (data: any) => {
          this.hotelData.set(data);
          this.hotelRooms.set(data.rooms);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  bringFilteredData(dataFiltered: any) {
    console.log(dataFiltered);

    if (dataFiltered == '') {
      this.getHotelRooms();
      console.log(1);
    } else if (!dataFiltered.statusText) {
      this.hotelRooms.set(dataFiltered);
      this.errText.set('');
      console.log(2);
    } else {
      this.errText.set(dataFiltered.statusText);
      console.log(3);

      setTimeout(() => {
        this.errText.set('');
      }, 2000);
    }
  }
}
