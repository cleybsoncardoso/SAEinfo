import {NavController, Page} from 'ionic-angular';
import {IdentificacaoPage} from '../../pages/identificacao/identificacao';

/*
  Generated class for the EntrevistaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/entrevista/entrevista.html',
})
export class EntrevistaPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(IdentificacaoPage);
    }
}
}
