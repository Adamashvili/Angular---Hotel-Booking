import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  products: any = [
    {
    id: 1,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    price: 255
  },
  {
    id: 2,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    price: 255
  },
  {
    id: 3,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    price: 255
  },
  {
    id: 4,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    price: 255
  },
  {
    id: 5,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    price: 255
  },
  {
    id: 6,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    price: 255
  },
]

  value: number = 300;
  highValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

}
