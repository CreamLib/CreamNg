import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() isError: boolean = false;

}
