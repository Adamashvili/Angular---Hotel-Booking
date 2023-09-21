import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {

  products: any = [
    {
    id: 1,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    
  },
  {
    id: 2,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    
  },
  {
    id: 2,
    img: "https://images.trvl-media.com/lodging/16000000/15840000/15835100/15835033/cbb31f78.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    title: "lorem ipsum",
    
  },
  
]

}
