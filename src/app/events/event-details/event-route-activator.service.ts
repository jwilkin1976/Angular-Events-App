import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    // /!! ensures that a boolean is returned while + ensures that value is cast to a number
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists)
      this.router.navigate(['/404'])
    return eventExists
  }
}
