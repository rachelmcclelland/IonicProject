import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies: any [] = [];
  myVar: String;

  constructor(private mp:MovieProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
    }    

    
  search() {
    console.log(this.myVar);
    this.mp.getMovies(this.myVar).subscribe(data =>
      {this.movies = data.Search;
      })

      
  }

}
