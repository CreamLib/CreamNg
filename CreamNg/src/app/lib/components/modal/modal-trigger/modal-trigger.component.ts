import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-modal-trigger',
  templateUrl: './modal-trigger.component.html',
  styleUrls: ['./modal-trigger.component.css']
})
export class ModalTriggerComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

  @Input() modal!: ModalComponent;
  @Input() disabled!: string;

  public openModal(e: any): void {
    this.modal.ToggleOpen();
  }

}
