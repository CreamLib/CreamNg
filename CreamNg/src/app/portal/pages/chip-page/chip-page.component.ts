import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip-page',
  templateUrl: './chip-page.component.html',
  styleUrls: ['./chip-page.component.css']
})
export class ChipPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Output() pageTitle: string = "Chip";
  @Output() pageType: string = "Component";

}
