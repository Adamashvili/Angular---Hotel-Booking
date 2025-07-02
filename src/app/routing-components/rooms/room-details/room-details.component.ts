import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookedService } from 'src/app/services/bookedApi.service';
import { RoomsService } from 'src/app/services/roomsApi.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
  standalone: false,
})
export class RoomDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private roomsApi: RoomsService,
    private bookedApi: BookedService
  ) {}

  public room: any;
  public roomId: any;
  public imageId: number = 0;
  public afterPostSMS: string = '';
  public afterPostIMG: string = '';
  @ViewChild('bookSMSArea') public bookSMSArea!: ElementRef;

  public postForm: FormGroup = new FormGroup({
    checkInDate: new FormControl('', Validators.required),
    checkOutDate: new FormControl('', Validators.required),
    customerName: new FormControl('', Validators.required),
    customerPhone: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.detailedRoom();
    window.scrollTo(0, 0);
  }

  detailedRoom() {
    this.roomId = this.activatedRoute.snapshot.paramMap.get('id');
    this.roomsApi.getRooms().subscribe((res) => {
      this.room = res.find((item: any) => item.id == this.roomId);
      console.log(this.room.images.length);
    });
  }

  backImg() {
    this.imageId--;

    if (this.imageId < 0) {
      this.imageId = this.room.images.length - 1;
    }
  }

  nextImg() {
    this.imageId++;

    if (this.imageId > this.room.images.length - 1) {
      this.imageId = 0;
    }
  }

  postCustomRoom() {
    this.postForm.value.roomID = this.roomId;
    this.bookedApi.postRoom(this.postForm.value).subscribe({
      next: (data: any) => {
        this.afterPostSMS = data;
        this.afterPostIMG =
          'https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=612x612&w=0&k=20&c=0mlB50r769kHmLkVcq_HpdNFGdHIA_Cu_tPqN4IKZbc=';
        this.bookSMSArea.nativeElement.style.display = 'flex';
      },
      error: (data: any) => {
        this.afterPostSMS = data.error;
        this.afterPostIMG =
          'https://static.vecteezy.com/system/resources/previews/007/624/371/non_2x/paint-brush-red-cross-on-white-background-free-vector.jpg';
        this.bookSMSArea.nativeElement.style.display = 'flex';
      },
    });

    setTimeout(() => {
            this.bookSMSArea.nativeElement.style.display = "none"

    }, 2200);
  }
}
