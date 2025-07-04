import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavScrolling]'
})
export class NavScrollingDirective {

 constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener('window:scroll') scrolling() {
    if (window.scrollY > 600) {
      this.renderer.addClass(this.el.nativeElement, 'navOnScroll');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'navOnScroll');
    }
  }

}
