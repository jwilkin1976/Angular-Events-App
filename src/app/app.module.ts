import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventService,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpVoteComponent,
    DurationPipe,
    VoterService,
    LocationValidator,
    EventResolver
} from './events/index';

import { appRoutes } from 'src/routes';
import { Toastr, TOASTR_TOKEN, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { Error404Component } from './errors/404.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Declare 3rd party modules for use within the app
const toastr: Toastr = window['toastr'];
const jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule // Required to enable Http within application
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpVoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe,
  ],
  providers: [
    EventService,
    // set up 3rd party module as an injectable service using its defined injection token
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jquery },
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
