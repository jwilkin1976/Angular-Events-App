import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <!-- ? is a safe navigator that will handle null values for the defined property. This short circuits so
               only needs to be added at a top level -->
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <!-- ngSwitch allows us to display content conditionally based on a single property -->
        <div [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
            <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
            <span *ngSwitchDefault> (Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <!-- *ngIf will remove the element from the dom, if the element is expensive to create/bind then it may be better
             to use the html hidden property binding i.e. [hidden]="event?.location" -->
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any
}