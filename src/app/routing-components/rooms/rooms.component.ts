import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  standalone: false,
})
export class RoomsComponent implements OnInit {
  constructor(private roomApiService: RoomsService) { }
  rooms: any = [];
  protected filterForm: FormGroup = new FormGroup({
    roomTypeId: new FormControl(),
    priceFrom: new FormControl(),
    priceTo: new FormControl(),
    maximumGuests: new FormControl(),
    checkIn: new FormControl(),
    checkOut: new FormControl(),
  });

  ngOnInit(): void {
    this.getAllRooms();
    window.scrollTo(0, 0)
  }

  getAllRooms() {
    this.roomApiService.getRooms().subscribe((res) => (this.rooms = res));
  }

  getSingleRooms() {
    this.roomApiService.getRooms().subscribe((res) => {
      this.rooms = res.filter((item: any) => item.roomTypeId == 1);
    });
  }

  getDoubleRooms() {
    this.roomApiService.getRooms().subscribe((res) => {
      this.rooms = res.filter((item: any) => item.roomTypeId == 2);
    });
  }

  getDeluxeRooms() {
    this.roomApiService.getRooms().subscribe((res) => {
      this.rooms = res.filter((item: any) => item.roomTypeId == 3);
    });
  }

  filterRooms() {
    if (this.filterForm.value.priceFrom == '') {
      this.filterForm.value.priceFrom = null;
    }
    if (this.filterForm.value.priceTo == '') {
      this.filterForm.value.priceTo = null;
    }
    this.roomApiService
      .filteredRooms(this.filterForm.value)
      .subscribe((data: any) => (this.rooms = data));
  }
}
