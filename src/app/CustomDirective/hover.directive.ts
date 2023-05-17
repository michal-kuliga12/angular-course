import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0.8');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'height', '120px');
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }
  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.element.nativeElement, 'height', '100px');
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'default');
  }
}
