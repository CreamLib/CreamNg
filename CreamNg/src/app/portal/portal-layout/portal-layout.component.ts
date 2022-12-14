import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.css']
})
export class PortalLayoutComponent implements OnInit {

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  pageTitle: string = "";
  pageType: string = "";
  isThereSubNav: boolean = true;
  sectionNodeList!: any;
  currentUrl: string = this.router.url;

  onActivate(e: any) {
    this.pageTitle = e.pageTitle;
    this.pageType = e.pageType;
    this.cdr.detectChanges();

    this.sectionNodeList = document.querySelectorAll('section');
    let snLength = this.sectionNodeList.length;

    if(snLength == 0) {
      this.isThereSubNav = false;
    } else {
      this.isThereSubNav = true;
    }

    this.currentUrl = this.router.url;
  }

}
