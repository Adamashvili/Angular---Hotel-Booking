import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor( private router: Router ) {}

  isMobileNavShown: boolean = false

  scrollTo(idLink: string) {
    this.router.navigate(["/"])
    const element = document.getElementById(idLink);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
