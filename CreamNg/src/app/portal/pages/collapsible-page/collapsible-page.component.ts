import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collapsible-page',
  templateUrl: './collapsible-page.component.html',
  styleUrls: ['./collapsible-page.component.css']
})
export class CollapsiblePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Collapsible";
  @Output() pageType: string = "Component";

}
