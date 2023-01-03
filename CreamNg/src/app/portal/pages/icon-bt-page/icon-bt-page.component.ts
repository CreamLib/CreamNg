import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-bt-page',
  templateUrl: './icon-bt-page.component.html',
  styleUrls: ['./icon-bt-page.component.css']
})
export class IconBtPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Icon Button";
  @Output() pageType: string = "Component";

}
