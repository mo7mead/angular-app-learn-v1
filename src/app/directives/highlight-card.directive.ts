import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {
  @Input() externalColor: string = 'blck'
  defultColor: string = 'red'
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = 'gray'
  }
  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.backgroundColor = this.externalColor
  }
  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.backgroundColor = 'gray'
  }
}
