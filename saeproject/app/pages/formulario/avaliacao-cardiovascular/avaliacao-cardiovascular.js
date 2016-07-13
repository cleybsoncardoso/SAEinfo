import {NavController, Page, NavParams} from 'ionic-angular';
import {OxigenacaoPage} from '../oxigenacao/oxigenacao';
import {PacientesPage} from '../../pacientes/pacientes';
import {HidratacaoEEliminacaoVesicalPage} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';

@Page({
  templateUrl: 'build/pages/formulario/avaliacao-cardiovascular/avaliacao-cardiovascular.html',
})
export class AvaliacaoCardiovascularPage {
  static get parameters() {
    return [[NavParams],[NavController]];
  }

  constructor(params,nav) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(OxigenacaoPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.nav.setRoot(HidratacaoEEliminacaoVesicalPage,{parametro: this.paciente});
    }
  }
}
