import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-ellipsis-page',
  templateUrl: './text-ellipsis-page.component.html',
  styleUrls: ['./text-ellipsis-page.component.css']
})
export class TextEllipsisPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Output() pageTitle: string = "Text Ellipsis";
  @Output() pageType: string = "Component";

}
