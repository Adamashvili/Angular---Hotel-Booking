import { Component } from '@angular/core';
import { Hotels } from "../hotels/hotels";

@Component({
  selector: 'app-home',
  imports: [Hotels],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
