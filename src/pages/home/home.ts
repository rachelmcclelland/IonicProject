import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Name: string;
  Weather: any = [];

  constructor(private data: DataProvider, private storage:Storage, public navCtrl: NavController) {
  }

  ionViewDidLoad()
  {
    this.data.GetWeatherData().subscribe(data=>{
      this.Weather = data.weather;
    })
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
