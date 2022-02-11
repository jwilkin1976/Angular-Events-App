import { Routes } from '@angular/router';
import { CreateEventComponent } from './app/events/create-event.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/events-list.component';

// We need to ensure our routes are in the correct order otherwise we may end up matching an unexpected route pattern
export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent},
  { path: 'events/:id', component: EventDetailsComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full' },

]
