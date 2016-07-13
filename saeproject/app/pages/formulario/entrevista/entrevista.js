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

  //funcação executada após o carregamento do html
  ionViewLoaded(){
    this.setAntecedentes();
    this.setAlergias();
    this.setVacinas();
  }

  addAntecedente() {
    //incrementando a quantidade de antecedentes
    this.paciente.qtdeAntecedentes++;
    //guardando o div pai
    let divPai = document.getElementById("outrosAntecetendes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","antecedente"+this.paciente.qtdeAntecedentes);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("antecedente"+this.paciente.qtdeAntecedentes).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente"+this.paciente.qtdeAntecedentes+"' placeholder=' Outro Antecedente "+ this.paciente.qtdeAntecedentes+"'></input>";
  }

  /**Função que Remove um campo na relação de antecedentes*/
  removerAntecedente() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeAntecedentes > 0){
        //Guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        let text = "antecedente"+this.paciente.qtdeAntecedentes;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.qtdeAntecedentes--;
      }
  }

  /**Função que adiciona um campo na relação de Alergia*/
  addAlergia() {
    //incrementando a quantidade de antecedentes
    this.paciente.qtdeAlergias++;
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
    document.getElementById("alergia"+this.paciente.qtdeAlergias).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+this.paciente.qtdeAlergias+"' placeholder='Alergia "+ this.paciente.qtdeAlergias +"'></input>";
  }

  /**Função que Remove um campo na relação de Alergia*/
  removerAlergia() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeAlergias > 0){
        //Guardando o div pai
        let divPai = document.getElementById("alergias");
        let text = "alergia"+this.paciente.qtdeAlergias;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.qtdeAlergias--;
      }
  }
  addVacina() {
    //incrementando a quantidade de vacinas
    this.paciente.qtdeVacinas++;
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

    document.getElementById("vacina"+this.paciente.qtdeVacinas).innerHTML = "<input class='divitem2' type='text' id='campoVacina"+this.paciente.qtdeVacinas+"' placeholder='Vacina "+this.paciente.qtdeVacinas+"'></input>";
  }

  /**Função que Remove um campo na relação de vacina*/
  removerVacina() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeVacinas > 0){
        //Guardando o div pai
        let divPai = document.getElementById("vacinas");
        let text = "vacina"+this.paciente.qtdeVacinas;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //guardando valor do input
        let text2 = "campoVacina"+this.paciente.qtdeVacinas;
        let input = document.getElementById(text2);
        console.log(input.value);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.qtdeVacinas--;
      }
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }

  //funcao realizada quando o usuario desliza o dedo na tela
  slide(passar){
    if(passar.deltaX>0){
      this.getAntecedentes();
      this.getAlergias();
      this.getVacinas();
      this.nav.setRoot(IdentificacaoPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.getAntecedentes();
      this.getAlergias();
      this.getVacinas();
      this.nav.setRoot(AvaliacaoNeurologicaPage,{parametro: this.paciente});
    }
  }

  getAntecedentes(){
    let x=0;
    let list = [];
    while(x<this.paciente.qtdeAntecedentes){
      x++;
      let antecedentes = document.getElementById("campoAntecedente"+x);
<<<<<<< HEAD
      if(antecedentes.value!=""){
        this.paciente.antecedentes.push(antecedentes.value);
      }else{
        this.paciente.qtdeAntecedentes--;
      }
    //  console.log(this.paciente.antecedentes[(this.paciente.antecedentes.length-1)]);
=======
      list.push(antecedentes.value);
>>>>>>> 20ba409429136f0b890e3df604343149c8751344
    }
    this.paciente.antecedentes= list;
  }

  getAlergias(){
    let x=0;
    let list = [];
    while(x<this.paciente.qtdeAlergias){
      x++;
      let alergias = document.getElementById("campoAlergia"+x);
      list.push(alergias.value);
    }
    this.paciente.alergias = list;
  }

  getVacinas(){
    let x=0;
    let list = [];
    while(x<this.paciente.qtdeVacinas){
      x++;
      let vacinas = document.getElementById("campoVacina"+x);
      list.push(vacinas.value);
    }
    this.paciente.vacinas = list;
  }

  setAntecedentes(){
    if(this.paciente.qtdeAntecedentes>0){
      let x = 0;
      while(x<this.paciente.qtdeAntecedentes){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("outrosAntecetendes");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","antecedente"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("antecedente"+x).innerHTML = "<input class='divitem2' type='text' id='campoAntecedente"+x+"' value='"+this.paciente.antecedentes[x-1]+"'></input>";
      }
    }
  }
  setAlergias(){
    if(this.paciente.qtdeAlergias>0){
      let x = 0;
      while(x<this.paciente.qtdeAlergias){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("alergias");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","alergia"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("alergia"+x).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+x+"' value='"+ this.paciente.alergias[x-1] +"'></input>";
      }
    }
  }
  setVacinas(){
    console.log(this.paciente.qtdeVacinas)
    if(this.paciente.qtdeVacinas>0){
      let x = 0;
      while(x<this.paciente.qtdeVacinas){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("vacinas");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","vacina"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("vacina"+x).innerHTML = "<input class='divitem2' type='text' id='campoVacina"+x+"' value='"+ this.paciente.vacinas[x-1] +"'></input>";
      }
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
