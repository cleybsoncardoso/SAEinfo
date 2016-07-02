
import {Page, NavController} from 'ionic-angular';
import {HidratacaoEEliminacaoVesicalPage} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import {AspectosCutaneoMucosaPage} from '../aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa.html';
import {PacientesPage} from '../../pacientes/pacientes';

/*
  Generated class for the AlimentacaoEEliminacaoIntestinalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal.html',
})
export class AlimentacaoEEliminacaoIntestinalPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(AspectosCutaneoMucosaPage);
    }else if(passar.deltaX<0){
      this.nav.setRoot(HidratacaoEEliminacaoVesicalPage);
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

  toggleVomito(){
    let grupo = document.getElementById("vomito");
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
    }else{
      grupo.style.display = "block";
    }
  }

  Slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(IdentificacaoPage);
    }else if(passar.deltaX<0){
      this.nav.setRoot(AvaliacaoNeurologicaPage);
    }
  }

}
