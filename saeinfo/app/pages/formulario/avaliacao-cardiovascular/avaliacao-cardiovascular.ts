import {NavController, Page, NavParams} from 'ionic-angular';
import {OxigenacaoPage} from '../oxigenacao/oxigenacao';
import {PacientesPage} from '../../pacientes/pacientes';
import {HidratacaoEEliminacaoVesicalPage} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
import {CadastroPaciente} from '../../../model/cadastroPaciente';
import {DAOPacientes} from '../../../dao/dao-paciente';

@Page({
  templateUrl: 'build/pages/formulario/avaliacao-cardiovascular/avaliacao-cardiovascular.html',
})
export class AvaliacaoCardiovascularPage {

  private paciente:CadastroPaciente;
  private dao:DAOPacientes;

    constructor(private params:NavParams,private nav: NavController) {
      this.paciente = params.get("parametro");
      this.dao = params.get("data");
      this.nav = nav;
    }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.pop();
    }else if(passar.deltaX<0){
      this.nav.push(HidratacaoEEliminacaoVesicalPage,{parametro: this.paciente, data:this.dao});
    }
  }
}
