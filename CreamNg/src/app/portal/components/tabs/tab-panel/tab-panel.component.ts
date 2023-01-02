import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterViewInit,
  HostListener } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabPanelComponent implements OnInit, AfterViewInit {
  @Input() tabTitle: string = "";
  @Input() svgName!: string;
  @Input() svgType!: string;
  @Input() isActive!: boolean;
  @Input() idTab!: number;
  @Input() isDisabled!: boolean;
  @Input() adaptable!: boolean;
  @Input() tabIcon: string = "";

  tabID: string = "";
  panelID: string = "";


  /* Constructor Tab Component*/
  constructor() {
    this.idTab = this.randomID();
  }

  /* ID for Accessbility */
  ngOnInit() {
    this.tabID = 'tab' + this.idTab;
    this.panelID = 'panel' + this.idTab;
  }

  /* ID for Accessbility */
  ngAfterViewInit() {
    if (document.getElementById('page-body')) {
      if (document.querySelectorAll('div.adaptable').length > 0) {
        this.getsExtraHeight();
      }
    }
  }

  getsExtraHeight() {
    let pageBody = document.getElementById('page-body');

    if(pageBody) {
      let mainH = pageBody.offsetHeight;
      let mainW = pageBody.offsetWidth;
      let adaptables = pageBody.querySelectorAll('div.adaptable');

      adaptables.forEach(element => {
        (<HTMLElement>element).style.height = 'calc(' + mainH + 'px - 6rem)';
        (<HTMLElement>element).style.width = 'calc(' + mainW + 'px - 2.5rem)';
        //(<HTMLElement>element).style.top = '11rem';
      });
    }
  }

  /* Resize breakpoint tab */
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (document.getElementById('page-body')) {
      if (document.querySelectorAll('div.adaptable').length > 0) {
        this.getsExtraHeight();
      }
    }
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
