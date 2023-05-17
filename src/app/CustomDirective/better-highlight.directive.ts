import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input('appBetterHighlight') highlightColor: string = 'pink';
  @Input() defaultColor: string = 'transparent';
  // ====
  @Input() title: string = '';
  // ====
  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(): void {
    this.background = this.defaultColor;
  }
  @HostListener('mouseenter') mouseenter() {
    this.background = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.background = this.defaultColor;
  }
}
