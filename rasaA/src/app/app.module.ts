import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthguardserviceService } from './authguardservice.service';
import { BeforeloginComponent } from './layout/beforelogin/beforelogin.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { AttendanceAComponent } from './attendance-a/attendance-a.component';
import { RegisterAComponent } from './register-a/register-a.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FilesComponent } from './files/files.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';

import { SidebartskComponent } from './sidebartsk/sidebartsk.component';
//import { PhpdbComponent } from './phpdb/phpdb.component';
/*import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
*/




@NgModule({
  declarations: [
    AppComponent,
    BeforeloginComponent,
    AfterloginComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    MapComponent,
    ProfileComponent,
    TaskmanagementComponent,
    CameraComponent,
    AttendanceAComponent,
    RegisterAComponent,
    AdminpageComponent,
    AddtaskComponent,
    CalendarComponent,
    FilesComponent,
    AnalyticsComponent,
    SidebarComponent,
    UserComponent,
    TaskdetailsComponent,
    SidebartskComponent,
    //PhpdbComponent,
    //CalendarComponent,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgbModalModule,
    WebcamModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
      }),
      NgbTooltipModule 
  //  FullCalendarModule,
   
  ],
  providers: [AuthguardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
