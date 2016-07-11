import {NavController, Page, NavParams} from 'ionic-angular';
import {IdentificacaoPage} from '../identificacao/identificacao';
import {PacientesPage} from '../../../pages/pacientes/pacientes';
import {AvaliacaoNeurologicaPage} from '../avaliacao-neurologica/avaliacao-neurologica';
import {CadastroPaciente} from '../../../model/cadastroPaciente'
/*
  Generated class for the EntrevistaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/entrevista/entrevista.html',
})
export class EntrevistaPage {
  static get parameters() {
    return [[NavParams],[NavController]];
  }

  constructor(params,nav) {
    this.paciente = params.get("parametro");
    this.nav = nav;
    this.myIcons = ["md-add"];

  }
  addAntecedente() {
    //guardando o div pai
    let divPai = document.getElementById("outrosAntecetendes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","antecedente"+this.paciente.qtdeOutros);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("antecedente"+this.paciente.qtdeOutros).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente"+this.paciente.qtdeOutros+"'></input>";
    this.paciente.qtdeOutros++;
  }

  /**Função que Remove um campo na relação de antecedentes*/
  removerAntecedente() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeOutros > 0){
        this.paciente.qtdeOutros--;
        //Guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        let text = "antecedente"+this.paciente.qtdeOutros;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
      }
  }

  /**Função que adiciona um campo na relação de Alergia*/
  addAlergia() {
    //guardando o div pai
    let divPai = document.getElementById("alergias");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","alergia"+this.paciente.qtdeAlergias);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("alergia"+this.paciente.qtdeAlergias).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+this.paciente.qtdeAlergias+"'></input>";
    this.paciente.qtdeAlergias++;
  }

  /**Função que Remove um campo na relação de Alergia*/
  removerAlergia() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeAlergias > 0){
        this.paciente.qtdeAlergias--;
        //Guardando o div pai
        let divPai = document.getElementById("alergias");
        let text = "alergia"+this.paciente.qtdeAlergias;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
      }
  }
  addVacina() {
    //guardando o div pai
    let divPai = document.getElementById("vacinas");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:

    divFilho.setAttribute("id","vacina"+this.paciente.qtdeVacinas);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:

    document.getElementById("vacina"+this.paciente.qtdeVacinas).innerHTML = "<input class='divitem2' type='text' id='campoVacina"+this.paciente.qtdeVacinas+"'></input>";
    this.paciente.qtdeVacinas++;
  }

  /**Função que Remove um campo na relação de vacina*/
  removerVacina() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeVacinas > 0){
        this.paciente.qtdeVacinas--;
        //Guardando o div pai
        let divPai = document.getElementById("vacinas");
        let text = "vacina"+this.paciente.qtdeVacinas;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
      }
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){

    if(passar.deltaX>0){
      this.nav.setRoot(IdentificacaoPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.nav.setRoot(AvaliacaoNeurologicaPage,{parametro: this.paciente});
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
