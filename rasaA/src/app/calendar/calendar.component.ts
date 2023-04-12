import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})


export class CalendarComponent {
}  




/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

export class  CalendarComponent {
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private httpClient: HttpClient) {}
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost/attendance/calevents.php')
        .subscribe((res: any) => {
          this.Events.push(res);
          console.log(this.Events);
        });
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }
}


*/


/*import { Component } from '@angular/core';
import { Calendar, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

/*
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind the method to the component
    events: this.getTaskEvents()
  };

  handleDateClick(arg: any) {
    console.log('date clicked', arg.dateStr);
  }

  onEventClick(event: any) {
    console.log('event clicked', event.title);
  }

  getTaskEvents() {
    // this method should return an array of task events in the format required by FullCalendar
    return [
      {
        title: 'Task 1',
        start: '2023-04-01T10:00:00',
        end: '2023-04-01T12:00:00'
      },
      {
        title: 'Task 2',
        start: '2023-04-02T14:00:00',
        end: '2023-04-02T16:00:00'
      },
      // add more task events as needed
    ];
  }
      ================================
  calendarOptions: any = {
    plugins: [ dayGridPlugin ],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind the method to the component
    events: this.getTaskEvents()
  };

  handleDateClick(arg: any) {
    console.log('date clicked', arg.dateStr);
  }

  onEventClick(event: any) {
    console.log('event clicked', event.title);
  }

  getTaskEvents() {
    // this method should return an array of task events in the format required by FullCalendar
    return [
      {
        title: 'Task 1',
        start: '2023-04-01T10:00:00',
        end: '2023-04-01T12:00:00'
      },
      {
        title: 'Task 2',
        start: '2023-04-02T14:00:00',
        end: '2023-04-02T16:00:00'
      },
      // add more task events as needed
    ];
  } 

  
  calendar: Calendar;
  constructor() { }
  ngAfterViewInit() {
    this.calendar = new Calendar(document.getElementById('calendar'), {
      plugins: [ dayGridPlugin, interactionPlugin ],
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this),
      events: this.getTaskEvents()
    });

    this.calendar.render();
  }

  handleDateClick(arg: DateSelectArg) {
    console.log('date clicked', arg.startStr);
  }

  handleEventClick(arg: EventClickArg) {
    console.log('event clicked', arg.event.title);
  }

  getTaskEvents(): any[] {
    return [
      { title: 'Task 1', start: '2023-04-01T10:00:00', end: '2023-04-01T12:00:00' },
      { title: 'Task 2', start: '2023-04-02T14:00:00', end: '2023-04-02T16:00:00' }
    ];
  }

} 

export class CalendarComponent implements OnInit {
  calendar!: Calendar;

  constructor() { }

  ngOnInit(): void {
    this.calendar = new Calendar(document.getElementById('calendar'), {
      plugins: [ dayGridPlugin, interactionPlugin ],
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this),
      events: this.getTaskEvents()
    });

    this.calendar.render();
  }

  handleDateClick(arg: DateSelectArg) {
    console.log('date clicked', arg.startStr);
  }

  handleEventClick(arg: EventClickArg) {
    console.log('event clicked', arg.event.title);
  }

  getTaskEvents(): EventApi[] {
    return [
      { title: 'Task 1', start: '2023-04-01T10:00:00', end: '2023-04-01T12:00:00' },
      { title: 'Task 2', start: '2023-04-02T14:00:00', end: '2023-04-02T16:00:00' }
    ];
  }
}
*/



