import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiLinks } from '../../api-links';

@Component({
  selector: 'app-booking-form',
  imports: [ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {
  constructor(
    private service: ApiLinks,
    private renderer: Renderer2,
  ) {}
  today: string = new Date().toISOString().split('T')[0];
  bookSMS = signal<string>('');
  @Input() roomId!: number;
  @Output() closeEmit: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('smsH2') smsH2!: ElementRef;
  bookForm: FormGroup = new FormGroup({
    checkInDate: new FormControl('', Validators.required),
    checkOutDate: new FormControl('', Validators.required),
    customerName: new FormControl('', Validators.required),
    customerPhone: new FormControl('', Validators.required),
  });

  bookRoom() {
    this.bookForm.value.roomID = this.roomId;
    this.service.bookRoom(this.bookForm.value).subscribe({
      next: (wellResponse: any) => {
        this.bookSMS.set(wellResponse);
        this.renderer.setStyle(this.smsH2.nativeElement, 'display', 'block');
        this.renderer.addClass(this.smsH2.nativeElement, 'goodBook');
        this.renderer.removeClass(this.smsH2.nativeElement, 'wrongBook');
        setTimeout(() => {
          this.renderer.setStyle(this.smsH2.nativeElement, 'display', 'none');
        }, 3000);
      },
      error: (badResponse: any) => {
        this.bookSMS.set(badResponse.error);
        this.renderer.setStyle(this.smsH2.nativeElement, 'display', 'block');
        this.renderer.removeClass(this.smsH2.nativeElement, 'goodBook');
        this.renderer.addClass(this.smsH2.nativeElement, 'wrongBook');
        setTimeout(() => {
          this.renderer.setStyle(this.smsH2.nativeElement, 'display', 'none');
        }, 3000);
      },
    });
  }
}
