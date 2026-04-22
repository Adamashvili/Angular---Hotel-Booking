import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherRoomsComponent } from './routing-components/rooms/room-details/other-rooms/other-rooms.component';
import { NotfoundComponent } from './routing-components/notfound/notfound.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { NavScrollingDirective } from './directives/nav-scrolling.directive';
import { HotelsComponent } from './routing-components/hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

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
    NavScrollingDirective,
    HotelsComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
