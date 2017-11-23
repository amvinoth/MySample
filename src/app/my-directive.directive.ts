import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { }
  
   @HostListener('mouseenter') onMouseEnter() {
     this.highlight('yellow');
   }
  
   @HostListener('mouseleave') onMouseLeave( @Input() userName:string) {
   console.log(userName);
     
       this.highlight(null);
   }
  
   private highlight(color: string) {
this.el.nativeElement.style.backgroundColor=color;
    
     //this.el.nativeElement.style.borderstyle= 'solid';
   }

}
