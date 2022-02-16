import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventsListComponent,
  CreateSessionComponent,
  EventResolver
} from './app/events/index';

// We need to ensure our routes are in the correct order otherwise we may end up matching an unexpected route pattern
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./app/user/user.module')
      .then(m => m.UserModule)
  },

]
