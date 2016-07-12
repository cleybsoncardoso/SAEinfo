import {NavController, Page, NavParams} from 'ionic-angular';
import {AvaliacaoNeurologicaPage} from '../avaliacao-neurologica/avaliacao-neurologica';
import {PacientesPage} from '../../pacientes/pacientes';
import {AvaliacaoCardiovascularPage} from '../avaliacao-cardiovascular/avaliacao-cardiovascular';
/*
  Generated class for the OxigenacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/formulario/oxigenacao/oxigenacao.html',
})
export class OxigenacaoPage {
  static get parameters() {
    return [[NavParams],[NavController]];
  }

  constructor(params,nav) {
    this.paciente = params.get("parametro");
    this.nav = nav;
  }

  //funcação executada após o carregamento do html
  ionViewLoaded(){
    this.setRespiracoes();
  }

  toggleGroup(id){
    let grupo = document.getElementById("dados"+id);
    let icone = document.getElementById("icone"+id);
    if(id==2){
      this.verificaExpetoracao();
    }
    if(id==3 && this.paciente.aspiracao=="sim"){
        let grupo = document.getElementById("listRadio0");
        grupo.style.display = "block";
    }
    if(id==4 && this.paciente.drenagemToracica=="sim"){
        let grupo = document.getElementById("listRadio1");
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
  verificaExpetoracao(){
    let grupo = document.getElementById("expetoracao");
    if(this.paciente.presencaoDeTosseExpectoracao == true){
      grupo.style.display = "block";
    }else{
      grupo.style.display = "none";
    }
  }

  toggleExpetoracao(){
    let grupo = document.getElementById("expetoracao");
    if(this.paciente.presencaoDeTosseExpectoracao == true){
      grupo.style.display = "none";
    }else{
      grupo.style.display = "block";
    }
  }

  /**Função que adiciona um campo na relação de Respiracao*/
  addRespiracao() {
    this.paciente.obsRespiracao++;
    //guardando o div pai
    let divPai = document.getElementById("respiracao");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","resp"+this.paciente.obsRespiracao);
    divFilho.setAttribute("class", "divitem4");
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("resp"+this.paciente.obsRespiracao).innerHTML = "<input class='divitem2' type='text' id='campoResp"+this.paciente.obsRespiracao+"' placeholder='Outros "+this.paciente.obsRespiracao+"'></input>";
  }

  /**Função que Remove um campo na relação de Respiracao*/
  removerRespiracao() {
      //só remove se já ouver um campo adicionado
      if(this.paciente.obsRespiracao > 0){
        //Guardando o div pai
        let divPai = document.getElementById("respiracao");
        let text = "resp"+this.paciente.obsRespiracao;
        //Guardando o ultimo div filho criado
        let divFilho = document.getElementById(text);
        //Removendo o ultimo DIV do nó-pai:
        divPai.removeChild(divFilho);
        this.paciente.obsRespiracao--;
      }
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }

  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(AvaliacaoNeurologicaPage,{parametro: this.paciente});
    }else if(passar.deltaX<0){
      this.getRespiracoes();
      this.nav.setRoot(AvaliacaoCardiovascularPage,{parametro: this.paciente});
    }
  }

  getRespiracoes(){
    let x=0;
    while(x<this.paciente.obsRespiracao){
      x++;
      let respiracoes = document.getElementById("campoResp"+x);
      this.paciente.respiracoes.push(respiracoes.value);
    }
  }

  setRespiracoes(){
    if(this.paciente.obsRespiracao>0){
      let x = 0;
      while(x<this.paciente.obsRespiracao){
        x++;
        //guardando o div pai
        let divPai = document.getElementById("respiracao");
        //Criando o elemento DIV filho;
        let divFilho = document.createElement("div");
        //Definindo atributos ao campoFilho:
        divFilho.setAttribute("id","resp"+x);
        divFilho.setAttribute("class", "divitem4");
        //Inserindo o elemento filho no pai:
        divPai.appendChild(divFilho);
        //Escrevendo algo no filho recém-criado:
        document.getElementById("resp"+x).innerHTML = "<input class='divitem2' type='text' id='campoAlergia"+x+"' value='"+ this.paciente.respiracoes[x-1] +"'></input>";
      }
    }
  }

  toggleGroup2(id,status){
    let grupo = document.getElementById("listRadio"+id);
    grupo.style.display = status;

  }
}
