import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})

export class RoomsService {
    constructor(private roomApi: HttpClient) {}


    baseRoomUrl: string = "https://hotelbooking.stepprojects.ge/api/Rooms/"


    getRooms(): Observable<any> {
       return this.roomApi.get(this.baseRoomUrl + "GetAvailableRooms")
    }

    getHotelRooms(id: number) {
        return this.roomApi.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
    }

    filteredRooms(body:any) {
        return this.roomApi.post("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered", body)
    }

}