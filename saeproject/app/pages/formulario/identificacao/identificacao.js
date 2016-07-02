import {NavController, Page} from 'ionic-angular';
import {PacientesPage} from '../../../pages/pacientes/pacientes';
import {EntrevistaPage} from '../entrevista/entrevista';
/*
  Generated class for the IdentificacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/identificacao/identificacao.html',
})
export class IdentificacaoPage {
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
    if(passar.deltaX<0){
      this.nav.setRoot(EntrevistaPage);
    }
  }
}
