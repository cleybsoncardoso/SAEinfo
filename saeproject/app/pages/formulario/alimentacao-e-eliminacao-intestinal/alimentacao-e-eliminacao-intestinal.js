import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the AlimentacaoEEliminacaoIntestinalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal.html',
})
export class AlimentacaoEEliminacaoIntestinalPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
