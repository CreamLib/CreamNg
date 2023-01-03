import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Output() pageTitle: string = "Message Block";
  @Output() pageType: string = "Component";

}
