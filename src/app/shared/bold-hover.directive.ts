import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBoldHover]'
})
export class BoldHoverDirective {

  private element: HTMLElement;

  constructor(element: ElementRef){
    this.element = element.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.style.fontWeight = 'normal';
  }

}
