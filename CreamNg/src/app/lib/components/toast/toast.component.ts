import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  idToastNum!: number;
  toastId!: string;
  active: boolean = false;

  constructor() {
    this.idToastNum = this.randomID();
  }

  @Input() toastText: string = "";
  @Input() delay: number = 6500;
  @Input() role: string = 'status';
  @Input() disabled!: string;
  @Input() styleClass: string = 'slide-to-bottom';
  @Input() closeBtnTitle: string = 'Close toast';

  ngOnInit(): void {
    this.toastId = 'toast' + this.idToastNum;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeToast();
      return;
    }
  }

  public toggle() {
    if (this.active === false) {
      this.active = true;
      // If delay, hide toast after it
      if (this.delay > 0) {
        setTimeout(() => {
          this.closeToast();
        }, this.delay);
      }
    }
  }

  public closeToast() {
    this.active = false;
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

}

