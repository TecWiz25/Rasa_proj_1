import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
import { BeforeloginComponent } from './layout/beforelogin/beforelogin.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AttendanceAComponent } from './attendance-a/attendance-a.component';
import { RegisterAComponent } from './register-a/register-a.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FilesComponent } from './files/files.component';
import { AnalyticsComponent } from './analytics/analytics.component';
//import { PhpdbComponent } from './phpdb/phpdb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { SidebartskComponent } from './sidebartsk/sidebartsk.component';


const routes: Routes = [
  {
    path: '',
    component: BeforeloginComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path:'attendance-a', component: AttendanceAComponent},
      
     
    ]
  },
  {
    path: '',
    component: AfterloginComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      { path: 'map', component: MapComponent},
      { path: 'profile', component:ProfileComponent },
      { path: 'taskmanagement', component: TaskmanagementComponent},
      { path: 'admin', component: AdminpageComponent},
      { path:'register-a', component:RegisterAComponent},
      { path: 'addtask', component:AddtaskComponent},
      { path: 'calendar', component:CalendarComponent},
      { path: 'files', component:FilesComponent},
      { path: 'analytics', component:AnalyticsComponent},
      { path: 'sidebar', component:SidebarComponent},
      //{ path:'phpdb', component:PhpdbComponent},
      { path: 'user', component:UserComponent},
      { path: 'tsk', component:SidebartskComponent },
    ]
  },
 // { path:}
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
