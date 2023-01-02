import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.css']
})
export class PortalLayoutComponent implements OnInit {

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  pageTitle: string = "";
  isThereSubNav: boolean = true;
  sectionNodeList!: any;
  currentUrl: string = this.router.url;

  onActivate(e: any) {
    this.pageTitle = e.pageTitle;
    this.sectionNodeList = document.querySelectorAll('section');

    if(this.sectionNodeList.length == 0) {
      this.isThereSubNav = false;
    }
    this.currentUrl = this.router.url;
    this.cdr.detectChanges();
  }

}
