import {NavController, Page, NavParams} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {AlimentacaoEEliminacaoIntestinalPage} from '../alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
import {CadastroPaciente} from '../../../model/cadastroPaciente';

@Page({
  templateUrl: 'build/pages/formulario/aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa.html',
})

export class AspectosCutaneoMucosaPage {
  static get parameters() {
    return [[NavParams],[NavController]];
  }
  
  private paciente:CadastroPaciente;
    constructor(private params:NavParams,private nav: NavController) {
      this.paciente = params.get("parametro");
      this.nav = nav;
    }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }

  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(AlimentacaoEEliminacaoIntestinalPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.nav.setRoot(SegurancaFisicaPage,{parametro: this.paciente});
    }
  }

  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);
    let icone = document.getElementById("icone"+id);
    if(id==2 && this.paciente.avp=="sim"){
        let grupo = document.getElementById("listRadio0");
        grupo.style.display = "block";
    }
    if(id==5){
      this.verificaLesoes();
    }
    if(id==3 && this.paciente.cvc=="sim"){
        let grupo = document.getElementById("listRadio1");
        grupo.style.display = "block";
    }
    if(id==4 && this.paciente.dreno=="sim"){
        let grupo = document.getElementById("listRadio2");
        grupo.style.display = "block";
    }
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

  verificaLesoes(){
    let grupo = document.getElementById("lesoes");
    if(this.paciente.genitaliaLesoes == true){
      grupo.style.display = "block";
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

  toggleGroup2(id,status){
    let grupo = document.getElementById("listRadio"+id);
    grupo.style.display = status;

  }
}
