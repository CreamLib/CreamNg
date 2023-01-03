import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css']
})
export class AccordionPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Accordion";
  @Output() pageType: string = "Component";

}
