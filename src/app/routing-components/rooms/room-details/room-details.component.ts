import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
constructor(private activatedRoute: ActivatedRoute, private roomsApi: RoomsService) {}

room: any;
roomId: any;

imageId: number = 0



ngOnInit(): void {
  this.detailedRoom()


  
}





detailedRoom() {
  this.roomId = this.activatedRoute.snapshot.paramMap.get('id');
  this.roomsApi.getRooms().subscribe((res) => {
    this.room = res.find((item:any) => item.id == this.roomId)
    console.log(this.room.images.length);
    
  })


  
}

backImg() {
  this.imageId--

  if(this.imageId < 0) {this.imageId = this.room.images.length-1}

}

nextImg () {
  this.imageId++

  if(this.imageId > this.room.images.length-1) {this.imageId = 0}

}


}
