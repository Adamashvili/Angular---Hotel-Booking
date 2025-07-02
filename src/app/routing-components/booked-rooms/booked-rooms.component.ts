import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookedService } from 'src/app/services/bookedApi.service';
import { HotelsService } from 'src/app/services/hotelsApi.service';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrls: ['./booked-rooms.component.css'],
  standalone: false,
})
export class BookedRoomsComponent implements OnInit {
  constructor(
    private bookedHttpServ: BookedService,
    private roomsServ: RoomsService
  ) {}

  bookedList: any = [];

  ngOnInit(): void {
    this.getBookedRooms();
    window.scrollTo(0, 0);
  }

  getBookedRooms() {
    this.bookedList = [];
    return this.bookedHttpServ.getRooms().subscribe({
      next: (res: any[]) => {
        res.forEach((bookedItem: any) => {
          this.roomsServ.getRooms().subscribe((roomData: any[]) => {
            roomData.forEach((roomItem: any) => {
              if (bookedItem.roomID == roomItem.id) {
                bookedItem.room = roomItem.name;
                bookedItem.hotelId = roomItem.hotelId;
                bookedItem.pricePerNight = roomItem.pricePerNight;
                bookedItem.image = roomItem.images[0].source;
                bookedItem.customerName = bookedItem.customerName.slice(0, 20);
                this.bookedList.push(bookedItem);
                //
              }
            });
          });
        });
      },
    });
  }

  cancelBooking(id: any) {
    return this.bookedHttpServ.deleteRoom(id).subscribe({
      next: (res) => {
        alert(res);
        this.getBookedRooms();
      },
      error: (err) => alert(err.error),
    });
  }
}
