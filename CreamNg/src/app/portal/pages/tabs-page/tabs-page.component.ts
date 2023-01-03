import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.component.html',
  styleUrls: ['./tabs-page.component.css']
})
export class TabsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Tabs";
  @Output() pageType: string = "Component";

}
