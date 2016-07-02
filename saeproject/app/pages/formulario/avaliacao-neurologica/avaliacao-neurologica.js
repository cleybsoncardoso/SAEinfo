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
    this.myIcons = ["md-add"];
    this.initiateIcons();
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
  initiateIcons(){
    var i = 0;
    for(i=0;i<17;i++){
      this.myIcons[i] = "md-add";
    }
  }
  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);
    if(id!=1){
      this.toggleClose(id);
    }
    if(grupo.style.visibility == "visible"){
      this.myIcons[id] = "md-add";
      grupo.style.height = "0px";
      grupo.style.visibility = "hidden";
    }else{
      grupo.style.visibility = "visible";
      grupo.style.height = "auto";
    }
  }

  toggleClose(id){
    var i=0;
    let grupo = document.getElementById("dados"+i);
    while(grupo!=null){
      if(i!=id && i!=1){
        grupo.style.height = "0px";
        grupo.style.visibility = "hidden";
        this.myIcons[i] = "md-add";
      }else{
        this.myIcons[i] = "md-remove";
      }
      i++;
      grupo = document.getElementById("dados"+i);
    }
  }
}
