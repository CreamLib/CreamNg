import {
  Component,
  OnInit,
  Input,
  Output,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  HostListener,
  ChangeDetectorRef,
  Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer:Renderer2,
    private cdr: ChangeDetectorRef) { }

  @Input() setId: string | undefined;

  @Output() isExpanded: boolean = false;

  @ViewChild('mainNav') nav!: ElementRef;

  currentUrl: string = this.router.url;
  navSectionID: string = "";

  navData = [
    {
      "label": "Blocks",
      "url": "./",
      "svgIcon": "nav-blocks",
      "subs": [
        {
          "label": "Accordion",
          "url": "portal/accordion"
        },
        {
          "label": "Collapsible",
          "url": "portal/collapsible"
        },
        {
          "label": "Modal",
          "url": "portal/modal"
        },
        {
          "label": "Tabs",
          "url": "portal/tabs"
        }
      ]
    },
    {
      "label": "Feedback",
      "url": "./",
      "svgIcon": "nav-feedbacks",
      "subs": [
        {
          "label": "Toast",
          "url": "portal/toast"
        },
        {
          "label": "Snackbar",
          "url": "portal/snackbar"
        },
        {
          "label": "Messages",
          "url": "portal/messages"
        }
      ]
    },
    {
      "label": "Utilities",
      "url": "./",
      "svgIcon": "nav-tools",
      "subs": [
        {
          "label": "Chip",
          "url": "portal/chip"
        },
        {
          "label": "Dropdown",
          "url": "portal/dropdown"
        },
        {
          "label": "Icon Button",
          "url": "portal/icon-button"
        },
        {
          "label": "Tooltip",
          "url": "portal/tooltip"
        }
      ]
    }
  ]

  @ViewChildren('navLink') links!: QueryList<ElementRef>;
  @ViewChildren('levelOne') sections!: QueryList<ElementRef>;

  // Starting...
  ngOnInit(): void {
    this.navSectionID = 'navSection' + this.randomID();
  }

  ngAfterViewInit(): void {
    this.links.forEach(link => {
      if(link.nativeElement.getAttribute('href') === this.router.url) {
        let controlButton = link.nativeElement.parentNode.parentNode.previousSibling;
        controlButton.setAttribute('aria-expanded', 'true');
        controlButton.classList.add('opened');
      }
    });
    if(window.innerWidth >= 1000) {
      setTimeout(() => {
        this.openNav();
      }, 500);
    } else {
      setTimeout(() => {
        this.closeNav();
      }, 500);
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth >= 1000) {
      this.openNav();
    } else {
      this.closeNav();
    }
    this.cdr.detectChanges();
  }
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && window.innerWidth < 1000) {
      this.closeNav();
      event.stopPropagation();
      return;
    }
  }

// Return sub array
  getSubData(levelOne: string) {
    let navData = Object.values(this.navData).filter((data, i) => data.label === levelOne);
    return(navData[0].subs);
  }

  closeNav() {
    this.renderer.removeClass(this.nav.nativeElement,'opened');
    this.renderer.addClass(this.nav.nativeElement,'closed');
    this.isExpanded = false;
  }

  openNav() {
    this.renderer.removeClass(this.nav.nativeElement,'closed');
    this.renderer.addClass(this.nav.nativeElement,'opened');
    this.isExpanded = true;
  }

  closeNavCondition() {
    if(window.innerWidth < 1000) {
      this.closeNav();
    }
  }

  /* Class manipulation is needed for CSS animation */
  toggleOpen() {
    if(this.nav.nativeElement.classList.contains('opened')) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  // When last link has focus close menu
  isLast(e: any) {
    if(this.links.last.nativeElement === e.target && window.innerWidth < 1000) {
      this.closeNav();
    }
  }

  // Nav accordion
  closeAll(e: any) {
    this.sections.forEach(group => {
      group.nativeElement.classList.remove('open');
      group.nativeElement.classList.add('close');
      group.nativeElement.setAttribute('aria-expanded', 'false');
    });
  }

  openAccordion(e: any) {
    this.closeAll(e);
    e.target.classList.remove('close');
    e.target.classList.add('open');
    e.target.setAttribute('aria-expanded', 'true');
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

}
