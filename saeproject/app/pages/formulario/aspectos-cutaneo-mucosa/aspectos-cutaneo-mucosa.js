import {NavController, Page} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {AlimentacaoEEliminacaoIntestinalPage} from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
/*
  Generated class for the AspectosCutaneoMucosaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa.html',
})
export class AspectosCutaneoMucosaPage {
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
      this.nav.setRoot(AlimentacaoEEliminacaoIntestinalPage);
    }else if(passar.deltaX<0){
      this.nav.setRoot(SegurancaFisicaPage);
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
toggleLesoes(){
  let grupo = document.getElementById("lesoes");
  if(grupo.style.display == "block"){
    grupo.style.display = "none";
  }else{
    grupo.style.display = "block";
  }
}
}
