import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ApiLinks } from '../../api-links';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-filterform',
  imports: [ReactiveFormsModule],
  templateUrl: './filterform.html',
  styleUrl: './filterform.css',
})
export class Filterform {
  constructor(private service: ApiLinks) {
    this.getRoomTypes();
  }

  @Output() dataTransferer: EventEmitter<any> = new EventEmitter()
  roomTypes = signal<any[]>([]);

  filterForm: FormGroup = new FormGroup({
    roomTypeId: new FormControl("", [Validators.required]) ,
    priceFrom: new FormControl("", [Validators.required]) ,
    priceTo: new FormControl("", [Validators.required]) ,
    maximumGuests: new FormControl("", [Validators.required, Validators.max(5)]) ,
    checkIn: new FormControl("", [Validators.required]) ,
    checkOut: new FormControl("", [Validators.required]) ,
  });

  filterRooms() {
    this.service.filteredRooms(this.filterForm.value).subscribe( {
      next:(data:any) => this.dataTransferer.emit(data),
      error:(errData:any) => this.dataTransferer.emit(errData)
    } )
  }

  getRoomTypes() {
    this.service.getRoomTypes().subscribe((types: any) => this.roomTypes.set(types));
  }
}
