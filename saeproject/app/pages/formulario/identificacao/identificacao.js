import {NavController, Page, NavParams} from 'ionic-angular';
import {PacientesPage} from '../../../pages/pacientes/pacientes';
import {EntrevistaPage} from '../entrevista/entrevista';
import {CadastroPaciente} from '../../../model/cadastroPaciente'
/*
  Generated class for the IdentificacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/identificacao/identificacao.html',
})
export class IdentificacaoPage {
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
    if(passar.deltaX<0){
      this.nav.setRoot(EntrevistaPage,{parametro: this.paciente});
    }
  }
}
