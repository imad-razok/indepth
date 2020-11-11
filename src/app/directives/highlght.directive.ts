import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlght]'
})
export class HighlghtDirective {

  constructor(private ele:ElementRef) { }

   @HostListener('mouseenter')
   addHighlght(){
    this.ele.nativeElement.style.backgroundColor='yellow';
   }

   @HostListener('mouseleave')
   removeHighlght(){
    this.ele.nativeElement.style.backgroundColor=null;
   }
}
