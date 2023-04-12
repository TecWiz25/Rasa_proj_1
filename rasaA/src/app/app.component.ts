
import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

type NewType = WebcamImage | undefined;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  webcamImage: NewType;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}