import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiLinks {
  constructor(private http: HttpClient) {}

  getAllHotels() {
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
  }

  getHotelRooms(id: number) {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`);
  }

  getRoomTypes() {
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes")
  }

  filteredRooms(body: any) {
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', body);
  }

  bookRoom(info: any) {
    return this.http.post("https://hotelbooking.stepprojects.ge/api/Booking", info, {responseType: "text"})
  }
}
