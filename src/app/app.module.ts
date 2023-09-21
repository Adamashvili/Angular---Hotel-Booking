import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomeComponent } from './routing-components/home/home.component';
import { RoomsComponent } from './routing-components/rooms/rooms.component';
import { HotelsComponent } from './routing-components/hotels/hotels.component';
import { BookedRoomsComponent } from './routing-components/booked-rooms/booked-rooms.component';
import { BannerComponent } from './routing-components/home/banner/banner.component';
import { HomecardsComponent } from './routing-components/home/homecards/homecards.component';
import { UspsectionComponent } from './routing-components/home/uspsection/uspsection.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';
import { RoomDetailsComponent } from './routing-components/rooms/room-details/room-details.component';
import { RoomMoredetailsComponent } from './routing-components/rooms/room-details/room-moredetails/room-moredetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoomsComponent,
    HotelsComponent,
    BookedRoomsComponent,
    BannerComponent,
    HomecardsComponent,
    UspsectionComponent,
    RoomDetailsComponent,
    RoomMoredetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSliderModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
