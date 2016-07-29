import {NavController, Page, NavParams} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {AvaliacaoCardiovascularPage} from '../avaliacao-cardiovascular/avaliacao-cardiovascular';
import {AlimentacaoEEliminacaoIntestinalPage} from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import {CadastroPaciente} from "../../../model/cadastroPaciente";
/*
  Generated class for the HidratacaoEEliminacaoVesicalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical.html',
})
export class HidratacaoEEliminacaoVesicalPage {
  static get parameters() {
    return [[NavParams],[NavController]];
  }

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
      this.nav.setRoot(AvaliacaoCardiovascularPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.nav.setRoot(AlimentacaoEEliminacaoIntestinalPage,{parametro: this.paciente});
    }
}
  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);
    let icone = document.getElementById("icone"+id);
    this.toggleClose(id);
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
      icone.innerHTML = '+';
    }else{
      grupo.style.display = "block";
      icone.innerHTML = '-';
    }
  }

  toggleClose(id){
    var i=0;
    let grupo = document.getElementById("dados"+i);
    let icone = document.getElementById("icone"+i);
    while(grupo!=null){
      if(i!=id){
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("icone"+i);
      grupo = document.getElementById("dados"+i);
    }
  }
}
