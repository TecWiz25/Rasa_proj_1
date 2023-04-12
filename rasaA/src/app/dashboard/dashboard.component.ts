import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, EventEmitter, OnInit, Output
  
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Observable,Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { EventColor } from 'calendar-utils';

export interface timeResult {
  time : String;
  message : String;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;


  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    
  ];

  activeDayIsOpen: boolean = true;
  modal: any;
  items: Array<{currid:number}> = [];
  currid: any;
  tstatus : any;
  
  constructor(private http: HttpClient) {
    imageData: '';
  } 

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
      
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  webcamImage: WebcamImage | undefined;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  this.saveImage(webcamImage);
  }
  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  


  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });

      this.checkatt();
  }

  takeSnapshot(): void {
    this.trigger.next();
  }
  timeout(): void {
    let text = "Are you sure want to timeout today";
    if (confirm(text) == true) {
      this.trigger.next();
    }
 
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handle(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  imageData: string | undefined;

  

  captureImage() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var ctx2d = canvas.getContext('2d');
        this.imageData = canvas.toDataURL('image/png');
        stream.getTracks().forEach(track => track.stop());
        this.saveImage(this.imageData);
      });
    }
    

  saveImage(imageData: any) {
    const formData = new FormData();
    formData.append('image', imageData.imageAsDataUrl);
    formData.append('currid',localStorage.getItem('sessionUser')!);
    this.http.post('http://localhost/attendance/attendanceManage.php', formData).subscribe(result => {
      console.log(result);
      this.tstatus = result;
      // alert(this.tstatus.message);
      // window.location.reload();   
    });
  }
  checkatt() {
    const formData = new FormData();
    formData.append('checktime','1');
    formData.append('currid',localStorage.getItem('sessionUser')!);
    this.http.post('http://localhost/attendance/attendanceManage.php', formData).subscribe((result) => {
      console.log(result);
      this.tstatus = result;
    });
  } 
 changetimeout(imageData:any){
    const formData = new FormData();
    formData.append('image',imageData.imageAsDataUrl);
    formData.append('currid',localStorage.getItem('sessionUser')!);
    formData.append('checktime','2');
    this.http.post('http://localhost/attendance/attendanceManage.php', formData).subscribe(result => {
      console.log(result);
  }); 
}
latitude: any;
  longitude: any;

  addLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

}

