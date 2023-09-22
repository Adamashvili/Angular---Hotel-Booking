import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Options } from 'ngx-slider-v2';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  constructor(private roomApiService: RoomsService) { }
  rooms: any = []

  ngOnInit(): void {
    this.getAllRooms()

  }

  getAllRooms() {
    this.roomApiService.getRooms().subscribe({
      next: ((res) => this.rooms = res),
      error: ((error) => this.rooms = error)
    })

  }




  value: number = 300;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  chooseRooms!:FormGroup

  initForm() {
    this.chooseRooms = new FormGroup({
      
    })
  }

}
