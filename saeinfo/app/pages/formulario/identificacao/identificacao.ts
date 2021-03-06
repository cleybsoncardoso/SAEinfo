import {NavController, Page, NavParams} from 'ionic-angular';
import {PacientesPage} from '../../../pages/pacientes/pacientes';
import {EntrevistaPage} from '../entrevista/entrevista';
import {CadastroPaciente} from '../../../model/cadastroPaciente'
import {DAOPacientes} from '../../../dao/dao-paciente';
/*
  Generated class for the IdentificacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/identificacao/identificacao.html',
})
export class IdentificacaoPage {

private paciente:CadastroPaciente;
private dao:DAOPacientes;

  constructor(private params:NavParams,private nav:NavController) {
    this.paciente = params.get("parametro");
    this.dao=params.get("data");
    this.nav = nav;

  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX<0){
      this.nav.push(EntrevistaPage,{parametro: this.paciente, data:this.dao});
    }
  }
}
