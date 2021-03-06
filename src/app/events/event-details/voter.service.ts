import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ISession } from "..";

@Injectable()
export class VoterService {

  constructor(private http: HttpClient){

  }

  deleteVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe(); // We do this as we are not interested in the data returned by the api
  }

  addVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters.push(voterName);

    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe(); // We do this as we are not interested in the data returned by the api
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }

  private handleError<T> (result?: T) {
    return (error: unknown): Observable<T> => {
      // Add error handling below this line
      console.error(error);
      return of(result as T);
    }
  }
}
