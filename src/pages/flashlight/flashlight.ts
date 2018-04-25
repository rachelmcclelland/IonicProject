import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

/**
 * Generated class for the FlashlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {
  isOn:boolean = false;
  constructor(private flashlight: Flashlight, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }
  lightOn(){
    this.flashlight.switchOn();
    this.updateStatus();
      }
  turnOff(){
    this.flashlight.switchOff();
    this.updateStatus();
  }
  updateStatus(){
    this.isOn = this.flashlight.isSwitchedOn();
  }
    
}
