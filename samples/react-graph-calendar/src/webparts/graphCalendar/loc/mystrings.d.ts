declare interface IGraphCalendarWebPartStrings {
  EventsPerView: string;
  ShowRecurringEvents: string;
  StartTime: string;
  EndTime: string;
  Location: string;
  Body: string;
  Close: string;
  Loading: string;
}

declare module 'GraphCalendarWebPartStrings' {
  const strings: IGraphCalendarWebPartStrings;
  export = strings;
}
