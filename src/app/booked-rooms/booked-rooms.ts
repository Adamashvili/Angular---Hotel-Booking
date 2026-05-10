import { Component, ElementRef, Renderer2, signal, ViewChild } from '@angular/core';
import { ApiLinks } from '../api-links';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booked-rooms',
  imports: [CommonModule],
  templateUrl: './booked-rooms.html',
  styleUrl: './booked-rooms.css',
})
export class BookedRooms {
  constructor(
    private service: ApiLinks,
    public renderer: Renderer2,
  ) {
    this.showBookings();
  }
  @ViewChild('sms') sms!: ElementRef;
  bookedRoomList = signal<any>([]);

  showBookings() {
    this.service.getBookedRooms().subscribe({
      next: (data: any) => {
        let rightBooks = data
          .filter((item: any, i: number) => item.checkOutDate > item.checkInDate)
          .reverse();
        this.bookedRoomList.set(rightBooks);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  removeBooking(id: number) {
    this.service.cancelBooking(id).subscribe({
      next: (res: any) => {
        this.sms.nativeElement.innerText = res;
        this.renderer.setStyle(this.sms.nativeElement, 'right', 0);
        this.renderer.setStyle(this.sms.nativeElement, 'background-color', '#f0efe1');
        this.showBookings();
        setTimeout(() => {
          this.renderer.setStyle(this.sms.nativeElement, 'right', '-100%');
        }, 2000);
      },
      error: (err: any) => {
        this.sms.nativeElement.innerText = err.statusText;

        this.renderer.setStyle(this.sms.nativeElement, 'right', 0);
        this.renderer.setStyle(this.sms.nativeElement, 'background-color', 'red');
        setTimeout(() => {
          this.renderer.setStyle(this.sms.nativeElement, 'right', '-100%');
        }, 2000);
      },
    });
  }
}
