import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Name: string;

  constructor(private storage:Storage, public navCtrl: NavController) {
  }

  update()
  {
    this.navCtrl.push("UpdatePage");
  }

  ionViewWillEnter()
  {
    this.storage.get("Name").then((data)=>{this.Name = data; })
    .catch((err) => { console.log("database retrieval err")})
  }
}
