import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})

export class BookedService {
    constructor(private roomApi: HttpClient) {}


    baseBookedUrl: string = "https://hotelbooking.webwide.ge/api/"


    getRooms(): Observable<any> {
       return this.roomApi.get(this.baseBookedUrl + "Booking")
    }
}