import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookedService } from 'src/app/services/bookedApi.service';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrls: ['./booked-rooms.component.css']
})
export class BookedRoomsComponent implements OnInit {
  constructor (private bookedHttpServ: BookedService ) {}

  table: any = []


  ngOnInit(): void {
    this.getBookedRooms()
    
  }


  getBookedRooms() {
    return this.bookedHttpServ.getRooms().subscribe({
      next: ((res) => this.table = res)
    })
  }

}
