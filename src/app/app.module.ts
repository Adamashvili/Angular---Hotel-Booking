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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomDetailsComponent } from './routing-components/rooms/room-details/room-details.component';
import { RoomMoredetailsComponent } from './routing-components/rooms/room-details/room-moredetails/room-moredetails.component';
import { OtherRoomsComponent } from './routing-components/rooms/room-details/other-rooms/other-rooms.component';
import { NotfoundComponent } from './routing-components/notfound/notfound.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { NavScrollingDirective } from './directives/nav-scrolling.directive';

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
    RoomMoredetailsComponent,
    OtherRoomsComponent,
    NotfoundComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    ScrollTopDirective,
    NavScrollingDirective
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
