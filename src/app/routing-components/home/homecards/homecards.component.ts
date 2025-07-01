import { Component } from '@angular/core';
// import { Observable } from 'rxjs-compat';
// import { filter } from 'rxjs-compat/operator/filter';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
    selector: 'app-homecards',
    templateUrl: './homecards.component.html',
    styleUrls: ['./homecards.component.css'],
    standalone: false
})
export class HomecardsComponent {

  constructor(private roomsHttpServ: RoomsService) {}

  favouriteRooms: any = []



  ngOnInit(): void {
    this.getFavRooms()
  }

  getFavRooms() {
  this.roomsHttpServ.getRooms().subscribe((res) => {
    this.favouriteRooms = res.filter((item:any) => {
      return item.id <= 6;
      
    })
  })

}
}
