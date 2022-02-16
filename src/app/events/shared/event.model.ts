export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  },
  onlineUrl?: string;
  sessions: ISession[]
}

export interface ISession {
  id: number;
  eventId: number,
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}

// When searching we need to include the parent event id so we
// extend the ISession interface
export interface ISortableSession extends ISession {
  eventId: number;
}
