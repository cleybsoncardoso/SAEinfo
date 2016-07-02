import {NavController, Page} from 'ionic-angular';
import {OxigenacaoPage} from '../oxigenacao/oxigenacao';
import {PacientesPage} from '../../pacientes/pacientes';
import {HidratacaoEEliminacaoVesicalPage} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';

@Page({
  templateUrl: 'build/pages/formulario/avaliacao-cardiovascular/avaliacao-cardiovascular.html',
})
export class AvaliacaoCardiovascularPage {
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
      this.nav.setRoot(OxigenacaoPage);
    }else if(passar.deltaX<0){
      this.nav.setRoot(HidratacaoEEliminacaoVesicalPage);
    }
}
}
