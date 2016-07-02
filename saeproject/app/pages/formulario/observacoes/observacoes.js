import {NavController, Page} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
/*
  Generated class for the ObservacoesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/observacoes/observacoes.html',
})
export class ObservacoesPage {
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
      this.nav.setRoot(SegurancaFisicaPage);
    }
  }


}
