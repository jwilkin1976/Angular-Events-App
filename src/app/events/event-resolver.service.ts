import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
