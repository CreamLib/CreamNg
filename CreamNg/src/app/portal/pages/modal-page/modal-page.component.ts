import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css']
})
export class ModalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Output() pageTitle: string = "Modal";
  @Output() pageType: string = "Component";

  // Test for demo puposes
  test() {
    console.log('Modal works!');
  }

}
