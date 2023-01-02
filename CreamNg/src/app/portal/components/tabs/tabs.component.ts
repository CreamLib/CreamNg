import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChildren,
  ContentChildren,
  QueryList,
  HostListener,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterViewInit {

  /* List of Tabs Element */
  @ViewChildren('tabs') tabsElement!: QueryList<ElementRef>;
  @ContentChildren(TabPanelComponent) tabComponents!: QueryList<TabPanelComponent>;

  @Input() isDisabled!: boolean;
  @Input() hasNew: boolean = false;
  @Input() label: string = "";
  @Input() deletable: boolean = false;
  @Input() tabIcon: string = "";
  @Input() handleScroll: boolean = false;

  @Output() activeTab: string = "";
  @Output() deletedTabIndex!: number;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  /* Variables */
  tabs: TabPanelComponent[] = [];
  TabComponentBis = TabPanelComponent;
  hasScroll: boolean = false;
  isScrollLeft: boolean = false;
  isScrollRight: boolean = false;
  startIndexActiv: number = 0;

  /* constructor tab */
  constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {}

  ngAfterViewInit() {
    this.stageScroll();
    this.cdr.detectChanges();
  }

  ngAfterContentInit() {
    this.tabs = this.tabComponents.toArray();
  }

  /* Check scroll on resize */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.stageScroll();
    this.cdr.detectChanges();
  }

  stageScroll() {
    let thisEl = this.el.nativeElement;
    let scrollBox = thisEl.querySelector('ul');

    // If there's scroll
    if(thisEl.offsetWidth < scrollBox.scrollWidth) {
      this.hasScroll = true;
      this.isScrollRight = true;
      this.isScrollLeft = true;
      // If is end right
      if(scrollBox.offsetWidth + scrollBox.scrollLeft >= scrollBox.scrollWidth) {
        this.isScrollLeft = false;
      // If is end left
      } else {
        this.isScrollRight = false;
      }
    } else {
      this.hasScroll = false;
      this.isScrollRight = false;
      this.isScrollLeft = false;
    }
  }

  scroll2Left() {
    let scrollBox = this.el.nativeElement.querySelector('ul');
    let mostLeft = scrollBox.scrollWidth - scrollBox.offsetWidth;

    scrollBox.scrollLeft += 80;

    if(scrollBox.scrollLeft == mostLeft) {
      this.isScrollRight = true;
      this.isScrollLeft = false;
    } else {
      this.isScrollRight = true;
      this.isScrollLeft = true;
    }
  }

  scroll2Right() {
    let scrollBox = this.el.nativeElement.querySelector('ul');

    scrollBox.scrollLeft -= 80;

    if(scrollBox.scrollLeft == 0) {
      this.isScrollRight = false;
      this.isScrollLeft = true;
    } else {
      this.isScrollRight = true;
      this.isScrollLeft = true;
    }
  }

  setTabindex(tab: TabPanelComponent) {
    if (tab.isActive === true) {
      return "0";
    } else {
      return "-1";
    }
  }

  /* closes tabs and opens the active tab */
  selectTab(tab: TabPanelComponent) {
    this.tabs.forEach(TabComponentBis => {
      TabComponentBis.isActive = false;
    });
    tab.isActive = true;
  }

  selectNextTab(event: KeyboardEvent, i: number) {
    let toTabId: number;
    if(event.code === "ArrowLeft") {
      toTabId = i > 0 ? i - 1 : this.tabs.length - 1;
    } else if(event.code === "ArrowRight"){
      toTabId = i < (this.tabs.length - 1) ? i + 1 : 0;
    } else {
      toTabId = -1;
    }
    if(toTabId >= 0) {
      this.selectTab(this.tabs[toTabId]);
      this.tabsElement.toArray()[toTabId].nativeElement.querySelector('button').focus();
    }
    this.onChange.emit({ originalEvent: event, index: i });
  }

  // Delete Tab
  deleteTab(e: any, i: number) {
    this.deletedTabIndex = i;
    let currentLi = this.tabsElement.toArray()[i].nativeElement;
    let theTabs = currentLi.parentNode.querySelectorAll('li');

    let panelId = currentLi.querySelector('button.tabber').getAttribute('aria-controls');
    let panel = document.getElementById(panelId);

    let currIndex = Array.from(theTabs).indexOf(currentLi);

    this.tabs.splice(i, 1);

    // Activates previous tab only if current tab is active; otherwise do nothing
    // If current tab is the first one, activates the next
    if (currentLi.getAttribute('class').includes("active")) {
      if (i - 1 >= 0) {
        this.selectTab(this.tabs[i - 1]);
      }
      if (currIndex == 0) {
        this.selectTab(this.tabs[i]);
      }
    }

    currentLi.remove();
    if (panel) {
      panel.remove();
    }

    this.onClose.emit({ originalEvent: e, index: i });
    this.stageScroll();
  }

  // On Drop event / Drag'n drop
  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
     transferArrayItem(event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex);
    }
    this.onChange.emit({ originalEvent: event, index: event.currentIndex });
  }

}
