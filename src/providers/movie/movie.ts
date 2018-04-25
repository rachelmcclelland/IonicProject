import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
   }
   movie: string;
   getMovies(str: String) : Observable<any>{
     this.movie = "http://www.omdbapi.com/?apikey=2952678d&s=" + str; 
    console.log(this.movie);
     return this.http.get(this.movie);
   }
}
