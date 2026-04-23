import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


  isMobileNavShown: boolean = false

  scrollTo(idLink: string) {
    const element = document.getElementById(idLink);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
