import {NavController, Page, NavParams} from 'ionic-angular';
import {AspectosCutaneoMucosaPage} from '../aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import {PacientesPage} from '../../pacientes/pacientes';
import {ObservacoesPage} from '../observacoes/observacoes';
/*
  Generated class for the SegurancaFisicaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/seguranca-fisica/seguranca-fisica.html',
})
export class SegurancaFisicaPage {
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
      this.nav.setRoot(AspectosCutaneoMucosaPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.nav.setRoot(ObservacoesPage,{parametro: this.paciente});
    }

}
}
