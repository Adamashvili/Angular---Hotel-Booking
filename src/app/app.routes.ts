import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HotelRooms } from './hotel-rooms/hotel-rooms';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "hotelrooms/:id", component: HotelRooms}
];
