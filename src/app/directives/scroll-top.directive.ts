import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollTop]',
})
export class ScrollTopDirective {
  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener('window:scroll') scrolling() {
    if (window.scrollY > 400) {
      this.renderer.addClass(this.el.nativeElement, 'showMark');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'showMark');
    }
  }

  @HostListener('click') toTop() {
    window.scrollTo(0, 0)
  }
}
