import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress-spinner-page',
  templateUrl: './progress-spinner-page.component.html',
  styleUrls: ['./progress-spinner-page.component.css']
})
export class ProgressSpinnerPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Progress Spinner";
  @Output() pageType: string = "Component";

  // Demo for progress spinner
  // Sends signal to stop progress and close spinner
  stopProgress(el: any) {
    setTimeout(function() {
      el.isOpen = false;
    }, 3000);
  }

}
