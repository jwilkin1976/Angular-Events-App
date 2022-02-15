import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ISpeed } from 'selenium-webdriver';
import { ISession } from '..';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
                      ? this.visibleSessions.sort(sortByNameAsc)
                      : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      // Use slice to create a new array containing all of the session items
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
