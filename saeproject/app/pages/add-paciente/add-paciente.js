import {Page, ViewController} from 'ionic-angular';
//import {Paciente} from '../../model/paciente';

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
    this.qtdeObs = 0;
    this.qtdeVacinas = 0;
    this.glasgow = 0;
    this.glasgowOcular;
    this.glasgowVerbal;
    this.glasgowMotor;
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

  addObservacoes() {
    //guardando o div pai
    let divPai = document.getElementById("observacoes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","observacoes"+this.qtdeObs);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("observacoes"+this.qtdeObs).innerHTML = "<input class='divitem2' type='text' id='campoObservacoes"+this.qtdeObs+"'></input>";
    this.qtdeObs++;
  }

  /**Função que Remove um campo na relação de observacoes*/
  removerObservacoes() {
      //só remove se já ouver um campo adicionado
      if(this.qtdeObs > 0){
        this.qtdeObs--;
        //Guardando o div pai
        let divPai = document.getElementById("observacoes");
        let text = "observacoes"+this.qtdeObs;
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
    let icone = document.getElementById("icone"+id);
    console.log(grupo.style.display);
    if(id!=4 && id!=10 && id!=20 && id!=31){
      this.toggleClose(id);
    }
    if(grupo.style.display == "block"){
      grupo.style.display = "none";
      icone.innerHTML = '►';
    }else{
      grupo.style.display = "block";
      icone.innerHTML = '▼';
    }
  }

  toggleClose(id){
    var i=0;
    let grupo = document.getElementById("dados"+i);
    let icone = document.getElementById("icone"+i);
    while(grupo!=null){
      if(i!=id && i!=4 && i!=10 && i!=20 && i!=31){
        console.log(i);
        grupo.style.display = "none";
        icone.innerHTML = '►';
      }else{

      }
      i++;
      icone = document.getElementById("icone"+i);
      grupo = document.getElementById("dados"+i);
    }
  }

  toggleGroup2(id,status){

    let grupo = document.getElementById("listRadio"+id);
    grupo.style.display = status;

  }
  salvar(){
    this.view.dismiss(this.paciente);
  }

  cancel(){
    this.view.dismiss();
  }

}
