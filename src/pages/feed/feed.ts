import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:String = "Yang Ricardo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public soma2Numeros(num1:number,num2:number):void{
     alert(5+10+num1+num2)
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.soma2Numeros(1,2);
  }

}
