import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
  selector: 'app-hotel-rooms',
  imports: [RouterModule, CommonModule],
  templateUrl: './hotel-rooms.component.html',
  styleUrl: './hotel-rooms.component.css'
})
export class HotelRoomsComponent {
  constructor(public actR: ActivatedRoute, private serv: RoomsService) {
    this.getHotelRooms()
  }

  protected hotelInfo: any = []


  getHotelRooms() {
    this.actR.params.subscribe((param:Params) => {
      this.serv.getHotelRooms(param["id"]).subscribe((data:any) => this.hotelInfo = data)
    })
  }
}
