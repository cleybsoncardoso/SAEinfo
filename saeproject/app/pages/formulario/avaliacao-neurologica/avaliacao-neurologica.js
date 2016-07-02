import {NavController,Page} from 'ionic-angular';
import {EntrevistaPage} from '../entrevista/entrevista';
import {OxigenacaoPage} from '../oxigenacao/oxigenacao';
import {PacientesPage} from '../../pacientes/pacientes';
/*
  Generated class for the AvaliacaoNeurologicaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/avaliacao-neurologica/avaliacao-neurologica.html',
})
export class AvaliacaoNeurologicaPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.glasgow = 0;
    this.glasgowOcular;
    this.glasgowVerbal;
    this.glasgowMotor;
  }
  somarGlasgow(){
    this.glasgow = parseInt(this.glasgowOcular) + parseInt(this.glasgowVerbal) + parseInt(this.glasgowMotor);
  }

    cancel(){
      this.nav.setRoot(PacientesPage);
    }
    slide(passar){
      if(passar.deltaX>0){
        this.nav.setRoot(EntrevistaPage);
      }else if(passar.deltaX<0){
        this.nav.setRoot(OxigenacaoPage);
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
      console.log(i);
      if(i!=id){
        grupo.style.display = "none";
        icone.innerHTML = '+';
      }
      i++;
      icone = document.getElementById("icone"+i);
      grupo = document.getElementById("dados"+i);
    }
  }

  toggleGlasgow(){
    let grupo = document.getElementById("glasgow");
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
    }else{
      grupo.style.display = "block";
    }
  }

}
