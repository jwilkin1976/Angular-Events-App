import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "..";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a {cursor: pointer; }
    `]
})
export class EventDetailsComponent {
  defaultFilterBy = 'all';
  defaultSortBy = 'votes';
  event: IEvent;
  addMode: boolean;
  filterBy: string = this.defaultFilterBy;
  sortBy: string = this.defaultSortBy;

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // Note: When using route we need to ensure that keep track of all of the components state to
    // prevent unexpected outcomes i.e. reset addMode to false
    this.route.data.forEach((data) => {
        this.event = data['event'];
        this.resetState();
    })
    // Note: the below code is not subscribing to the params and therefore introduces
    // a bug where subsequent selections of search results do not refresh the app
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  private resetState() {
    this.addMode = false;
    this.filterBy = this.defaultFilterBy;
    this.sortBy = this.defaultSortBy;
  }
}


