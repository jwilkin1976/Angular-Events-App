import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

//declare const toastr // Ensure typescript is aware of 3rd party library
@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[]

    constructor(private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }
}
