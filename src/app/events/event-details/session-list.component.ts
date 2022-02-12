import { Component, Input, OnInit } from '@angular/core';
import { ISession } from '..';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent{
  @Input() sessions:ISession[]

  constructor() { }
}
