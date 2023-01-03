import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip-page',
  templateUrl: './tooltip-page.component.html',
  styleUrls: ['./tooltip-page.component.css']
})
export class TooltipPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Output() pageTitle: string = "Tooltip";
  @Output() pageType: string = "Directive";

}
