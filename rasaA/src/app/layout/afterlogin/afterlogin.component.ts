import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.scss']
})
export class AfterloginComponent implements OnInit {
  constructor(private router: Router){

  }
    ngOnInit(): void {
      console.log(
      localStorage.getItem("sessionUserDet"));
      if(!localStorage.getItem("uid")){
        this.router.navigate(['/login']);
      }
  }
    onlogout(){
      localStorage.clear();
      window.location.reload();
    }
}
