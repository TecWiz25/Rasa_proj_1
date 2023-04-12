import { Component,OnInit,ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";
// import {   } from "googlemaps";
declare var google:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
//   name = 'Angular';
//   public lat!:string;
//   public lng!:string;
//   mapurl!:string;
//   safeurl!:SafeResourceUrl;
// constructor(private sanitizer:DomSanitizer){

// }

//   public ngOnInit(): void {
//     this.getLocation();
//     // this.mapurl='https:www.google.com/maps?q=${this.lat},${this.lon}&h1=es&z=14amp;output=embed';
//   }

//   getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         if (position) {
//           console.log("Latitude: " + position.coords.latitude +
//             "Longitude: " + position.coords.longitude);
//           this.lat = position.coords.latitude.toString();
//           this.lng = position.coords.longitude.toString();
//           console.log(this.lat);
//           console.log(this.lat);
//           this.mapurl='https:maps.google.com/maps?q='+this.lat+','+this.lng+'&h1=es&z=14amp;output=embed';
//           console.log(this.mapurl)
//          this.safeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapurl);
//          console.log(this.safeurl)
//         }
//       },
//         (error) => console.log(error));
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }


latitude: number = 40.7128;
  longitude: number = -74.0060;
  map: any;

  constructor() { }

  ngOnInit() {
    // Initialize the Google Maps JavaScript API with your API key (if available)
    // Replace YOUR_API_KEY with your actual API key
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js`;
    document.head.appendChild(script);
    script.onload = () => {
      // Create a new Google Map object
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 14
      });
    };
  }

}