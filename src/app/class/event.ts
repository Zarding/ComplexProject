import {DayPilot} from "daypilot-pro-angular";

export class EventCalendar {
    constructor(id: number, start: Date, end: Date, text: string) {
        this.id = id.toString();
        this.start = DayPilot.Date.fromYearMonthDay(start.getFullYear(), start.getMonth()+1, start.getDate());
        this.end = DayPilot.Date.fromYearMonthDay(end.getFullYear(), end.getMonth()+1, end.getDate()).addDays(1);
        this.text = text;
    }
    id!: string;
    start!: DayPilot.Date;
    end!: DayPilot.Date;
    text!: string;
  }