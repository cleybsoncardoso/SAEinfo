import {Page, ViewController} from 'ionic-angular';
import {Paciente} from '../../model/paciente';

@Page({
  templateUrl: 'build/pages/add-paciente/add-paciente.html',
})
export class AddPacientePage {
  static get parameters() {
      return [[ViewController]];
  }

  constructor(view) {
    this.view = view;
    this.paciente = new Paciente();
    this.qtdeOutros = 0;
    this.qtdeAlergias = 0;
    this.qtdeVacinas = 0;
    this.myIcons = ["md-add", "md-add", "md-add"];
    this.glasgow= 0;
    this.glasgowOcular=0;
    this.glasgowVerbal=0;
    this.glasgowMotor=0;
  }

  somarGlasgow(){
    this.glasgow = parseInt(this.glasgowOcular) + parseInt(this.glasgowVerbal) + parseInt(this.glasgowMotor);
  }
  /**Função que adiciona um campo na relação de antecedentes*/
  addAntecedente() {
    //guardando o div pai
    let divPai = document.getElementById("outrosAntecetendes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","antecedente"+this.qtdeOutros);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("antecedente"+this.qtdeOutros).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente"+this.qtdeOutros+"'></input>";
    this.qtdeOutros++;
  }

  /**Função que Remove um campo na relação de antecedentes*/
  removerAntecedente() {
      //só remove se já ouver um campo adicionado
      if(this.qtdeOutros > 0){
        this.qtdeOutros--;
        //Guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        let text = "antecedente"+this.qtdeOutros;
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
    divFilho.setAttribute("id","alergia"+this.qtdeAlergias);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("alergia"+this.qtdeAlergias).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+this.qtdeAlergias+"'></input>";
    this.qtdeAlergias++;
  }

  /**Função que Remove um campo na relação de Alergia*/
  removerAlergia() {
      //só remove se já ouver um campo adicionado
      if(this.qtdeAlergias > 0){
        this.qtdeAlergias--;
        //Guardando o div pai
        let divPai = document.getElementById("alergias");
        let text = "alergia"+this.qtdeAlergias;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
      }
  }

  /**Função que adiciona um campo na relação de vacina*/
  addVacina() {
    //guardando o div pai
    let divPai = document.getElementById("vacinas");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","vacina"+this.qtdeVacinas);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("vacina"+this.qtdeVacinas).innerHTML = "<input class='divitem2' type='text' id='campoVacina"+this.qtdeVacinas+"'></input>";
    this.qtdeVacinas++;
  }

  /**Função que Remove um campo na relação de vacina*/
  removerVacina() {
      //só remove se já ouver um campo adicionado
      if(this.qtdeVacinas > 0){
        this.qtdeVacinas--;
        //Guardando o div pai
        let divPai = document.getElementById("vacinas");
        let text = "vacina"+this.qtdeVacinas;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
      }
  }

  /**Função que adiciona um campo na relação de Respiracao*/
  addRespiracao() {
    //guardando o div pai
    let divPai = document.getElementById("respiracao");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","resp"+this.qtdeVacinas);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("resp"+this.qtdeVacinas).innerHTML = "<input class='divitem2' type='text' id='campoResp"+this.qtdeVacinas+"'></input>";
    this.qtdeVacinas++;
  }

  /**Função que Remove um campo na relação de Respiracao*/
  removerRespiracao() {
      //só remove se já ouver um campo adicionado
      if(this.qtdeVacinas > 0){
        this.qtdeVacinas--;
        //Guardando o div pai
        let divPai = document.getElementById("respiracao");
        let text = "resp"+this.qtdeVacinas;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
      }
  }

  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);

    if(grupo.style.visibility == "visible"){
      this.myIcons[id] = "md-add";
      grupo.style.height = "0px";
      grupo.style.visibility = "hidden";
    }else{
      this.myIcons[id] = "md-remove";
      grupo.style.visibility = "visible";
      if(id == 0){
        grupo.style.height = "auto";
      }else if(id == 1){
        grupo.style.height = "auto";
      }
      else{
        grupo.style.height = "auto";
      }
    }
  }
  checar(){
    this.teste=document.getElementsByName("aspiracao")[0].checked;
    console.log(this.teste);
  }
  salvar(){
    this.view.dismiss(this.paciente);
  }

  cancel(){
    this.view.dismiss();
  }

}
