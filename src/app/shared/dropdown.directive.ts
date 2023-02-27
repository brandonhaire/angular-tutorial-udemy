// import { Directive, HostBinding, HostListener } from "@angular/core";

// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') toggleOpen(){
//         this.isOpen = !this.isOpen;
//     }


// }

// To create a dropdown that can also be closed by a click anywhere outside 
// (which also means that a click on one dropdown closes any other onemptied,
// btw), replace the code dropdown.directive.ts with this (placing the 
//     listener not on the dropdown but on the document):

import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}