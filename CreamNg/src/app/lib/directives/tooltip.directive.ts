import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private element: ElementRef) { }

  theTooltip!: any;
  theTitle!: any;
  theText!: any;
  originalCSSPosition: string = "";

  isExtremeRight(el: any) {
    let elLeft = el.getBoundingClientRect().left;
    let windowLeft = window.innerWidth;

    if ((elLeft + 250) > windowLeft) {
      return true;
    } else {
      return false;
    }
  }

  storeOriginalPosition(el: any) {
    let cssStyles = window.getComputedStyle(el);
    return cssStyles.getPropertyValue('position');
  }

  openTooltip() {
    this.theTitle = this.element.nativeElement.querySelector('title');

    if(this.theTitle) {
      this.theText = this.theTitle.textContent;
    } else {
      this.theText = this.element.nativeElement.innerText;
    }

    this.theTooltip = document.createElement('span');
    this.theTooltip.classList.add('tooltip');

    if (this.isExtremeRight(this.element.nativeElement)) {
      this.theTooltip.classList.add('to-left');
    }

    this.theTooltip.setAttribute('role', 'tooltip');
    this.theTooltip.style.top = this.element.nativeElement.offsetHeight + 10 + "px";
    this.theTooltip.textContent = this.theText;
    this.originalCSSPosition = this.storeOriginalPosition(this.element.nativeElement.parentNode);

    if(this.originalCSSPosition != "relative") {
      this.element.nativeElement.parentNode.style.position = "relative";
    }

    this.element.nativeElement.parentNode.appendChild(this.theTooltip);
  }

  closeAllTooltips() {
    if(document.querySelectorAll('span.tooltip').length > 0) {
      this.element.nativeElement.parentNode.style.position = this.originalCSSPosition;
      if(this.theTooltip.parentNode) {
        this.theTooltip.parentNode.removeChild(this.theTooltip);
      }
    }
  }

  // Mouse and keyboard events
  @HostListener('mouseenter') onMouseover() {
    this.openTooltip();
  }

  @HostListener('focus') onFocus() {
    this.openTooltip();
  }

  @HostListener('mouseleave') onMouseleave() {
    this.closeAllTooltips()
  }

  @HostListener('mousedown') onMousedown() {
    this.closeAllTooltips()
  }

  @HostListener('focusout') onFocusOut() {
    this.closeAllTooltips()
  }

  @HostListener('click') onClick() {
    this.closeAllTooltips()
  }

}
