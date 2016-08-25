import {NavController, Page, NavParams} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
import {ObservacoesPage} from '../observacoes/observacoes';
import {CadastroPaciente} from "../../../model/cadastroPaciente";

@Page({
  templateUrl: 'build/pages/formulario/save/save.html'
})
export class SavePage {

  private paciente: CadastroPaciente;

  constructor(private params: NavParams, private nav: NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(ObservacoesPage,{parametro: this.paciente});
    }
  }
  salvar(){

  }

  salvar2(){

  }
}
