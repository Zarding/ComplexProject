import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DayPilot} from "daypilot-pro-angular";
import {HttpClient} from "@angular/common/http";
import { TypeServicesPlan } from "src/app/class/typeservicesplan";

@Injectable()
export class DataService {

  events: any[] = [
    {
      id: "1",
      start: DayPilot.Date.today(),
      end: DayPilot.Date.today().addDays(1),
      text: "Event 1"
    },
    {
      id: "2",
      start: DayPilot.Date.today().addDays(2),
      end: DayPilot.Date.today().addDays(3),
      text: "Event 2"
    }
  ];

  private URL: string;
  public authenticated = false;
  response : any;

  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:8082/clientscalendar/'
  }

  public findAll(id: number): Observable<TypeServicesPlan[]> {
    return this.http.get<TypeServicesPlan[]>(this.URL + id);
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

}
