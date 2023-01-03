import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-snackbar-page',
  templateUrl: './snackbar-page.component.html',
  styleUrls: ['./snackbar-page.component.css']
})
export class SnackbarPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Snackbar";
  @Output() pageType: string = "Component";


}
