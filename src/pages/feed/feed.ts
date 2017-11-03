import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Yang Ricardo",
    data: "November 3, 2017",
    descricao: "Que viagem... O.O",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  public image_path = "https://image.tmdb.org/t/p/w500/";

  public nomeUsuario:String = "Yang Ricardo";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private movieProvider: MovieProvider
            ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
