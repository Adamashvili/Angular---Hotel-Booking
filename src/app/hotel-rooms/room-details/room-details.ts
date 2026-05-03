import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-room-details',
  imports: [CommonModule],
  templateUrl: './room-details.html',
  styleUrl: './room-details.css',
})
export class RoomDetails {

  @Input() roomDetails: any
  @Output() closeEmit: EventEmitter<boolean> = new EventEmitter()

  currentImage: number = 0



}
