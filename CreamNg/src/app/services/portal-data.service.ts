import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalDataService {

  categoryListEdited: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
