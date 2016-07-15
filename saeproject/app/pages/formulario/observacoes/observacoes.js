import {NavController, Page, NavParams} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';

@Page({
  templateUrl: 'build/pages/formulario/observacoes/observacoes.html',
})
export class ObservacoesPage {
  static get parameters() {
    return [[NavParams],[NavController]];
  }

  constructor(params,nav) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.getObservacoes();
      this.nav.setRoot(SegurancaFisicaPage,{parametro: this.paciente});
    }
  }

  ionViewLoaded(){
    this.setObservacoes();
  }

  addObservacoes() {
    this.paciente.qtdeObs++;
    //guardando o div pai
    let divPai = document.getElementById("observacoes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","observacoes"+this.paciente.qtdeObs);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("observacoes"+this.paciente.qtdeObs).innerHTML = "<input class='divitem2' type='text' id='campoObservacoes"+this.paciente.qtdeObs+"' placeholder='observação "+this.paciente.qtdeObs+"'></input>";

  }

  /**Função que Remove um campo na relação de observacoes*/
  removerObservacoes() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.qtdeObs > 0){
        //Guardando o div pai
        let divPai = document.getElementById("observacoes");
        let text = "observacoes"+this.paciente.qtdeObs;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        let text2 = "campoObservacoes"+this.paciente.qtdeObs;
        let input = document.getElementById(text2);
        divPai.removeChild(divFilho);
        this.paciente.qtdeObs--;
      }
  }

  getObservacoes(){
    let x=0;
    let cont = 0;
    this.paciente.observacao = [];
    while(x<this.paciente.qtdeObs){
      x++;
      let observacao = document.getElementById("campoObservacoes"+x);
      if(observacao.value!=""){
        this.paciente.observacao.push(observacao.value);
        cont++;
      }
    }
    this.paciente.qtdeObs=cont;
  }

  setObservacoes(){
    if(this.paciente.qtdeObs>0){
      let x = 0;
      while(x<this.paciente.qtdeObs){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("campoObservacoes");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","observacoes"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("observacoes"+x).innerHTML = "<input class='divitem2' type='text' id='campoObservacoes"+x+"' value='"+this.paciente.observacao[x-1]+"'></input>";
      }
    }
  }

}
