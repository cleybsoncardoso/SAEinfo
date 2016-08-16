import {Page, NavController, NavParams} from 'ionic-angular';
import {HidratacaoEEliminacaoVesicalPage} from '../hidratacao-e-eliminacao-vesical/hidratacao-e-eliminacao-vesical';
import {AspectosCutaneoMucosaPage} from '../aspectos-cutaneo-mucosa/aspectos-cutaneo-mucosa';
import {PacientesPage} from '../../pacientes/pacientes';
import {CadastroPaciente} from '../../../model/cadastroPaciente';

@Page({
  templateUrl: 'build/pages/formulario/alimentacao-e-eliminacao-intestinal/alimentacao-e-eliminacao-intestinal.html',
})
export class AlimentacaoEEliminacaoIntestinalPage {
private paciente:CadastroPaciente;
  constructor(private params:NavParams,private nav: NavController) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }

  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);
    let icone = document.getElementById("icone"+id);
    if(id==2){
      this.verificaVomito();
    }
    if(id==5 && this.paciente.ostomia=="sim"){
      let grupo = document.getElementById("listRadio0");
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

  verificaVomito(){
    let grupo = document.getElementById("vomito");
    if(this.paciente.presencaoDeVomito == true){
      grupo.style.display = "block";
    }
  }

  toggleGroup2(id,status){

    let grupo = document.getElementById("listRadio"+id);
    grupo.style.display = status;

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

  toggleVomito(){
    let grupo = document.getElementById("vomito");
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
    }else{
      grupo.style.display = "block";
    }
  }

  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(HidratacaoEEliminacaoVesicalPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.nav.setRoot(AspectosCutaneoMucosaPage,{parametro: this.paciente});
    }
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }

}
