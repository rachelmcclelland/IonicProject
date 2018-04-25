import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  myName:string;

  constructor(private storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }


  save()
  {
    this.storage.set("Name", this.myName);
    this.navCtrl.pop();
  }
}
