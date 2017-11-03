import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  private apikey = "fcd3bd26404f44d032ade8d097e7244b";
  private list = [
    "popular",
    "now_playing",
    "top_rated",
    "upcoming",
  ]
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath
      +"/movie/popular?api_key="
      +this.apikey
    );
  }

}
