import {NavController, Page, NavParams} from 'ionic-angular';
import {AspectosCutaneoMucosaPage} from '../aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import {PacientesPage} from '../../pacientes/pacientes';
import {ObservacoesPage} from '../observacoes/observacoes';
import {CadastroPaciente} from "../../../model/cadastroPaciente";
/*
  Generated class for the SegurancaFisicaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/seguranca-fisica/seguranca-fisica.html',
})
export class SegurancaFisicaPage {

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
      this.nav.pop();
    }else if(passar.deltaX<0){
      this.nav.push(ObservacoesPage,{parametro: this.paciente});
    }
  }
}
