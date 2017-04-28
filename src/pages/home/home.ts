import { Component } from '@angular/core';
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image:any = null;

  constructor(public camera: Camera) {
  }

  takeImage(){
    this.camera.getPicture().then(img =>{
      this.image = img;
    })
  }

}
