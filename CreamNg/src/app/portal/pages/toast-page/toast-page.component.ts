import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ToastComponent } from './../../../lib/components/toast/toast.component';

@Component({
  selector: 'app-toast-page',
  templateUrl: './toast-page.component.html',
  styleUrls: ['./toast-page.component.css']
})
export class ToastPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Output() pageTitle: string = "Toast";
  @Output() pageType: string = "Component";

  // Toast demo
  @ViewChild('toast', {static: true}) toast!: ToastComponent;
  @ViewChild('toast2', {static: true}) toast2!: ToastComponent;
  @ViewChild('toast3', {static: true}) toast3!: ToastComponent;

  public openToast(toast: ToastComponent) {
    toast.toggle();
  }

}
