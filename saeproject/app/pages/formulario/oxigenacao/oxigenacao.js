import {NavController, Page} from 'ionic-angular';
import {AvaliacaoNeurologicaPage} from '../avaliacao-neurologica/avaliacao-neurologica';
import {PacientesPage} from '../../pacientes/pacientes';

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
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.myIcons = ["md-add"];
    this.initiateIcons();
    this.obsRespiracao = 0;
  }

  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(AvaliacaoNeurologicaPage);
    }else if(passar.deltaX<0){
    //  this.nav.setRoot(OxigenacaoPage);
    }
}
initiateIcons(){
  var i = 0;
  for(i=0;i<17;i++){
    this.myIcons[i] = "md-add";
  }
}
toggleGroup(id){
  let grupo = document.getElementById("dados"+id);
  if(id!=3){
    this.toggleClose(id);
  }
  if(grupo.style.visibility == "visible"){
    this.myIcons[id] = "md-add";
    grupo.style.height = "0px";
    grupo.style.visibility = "hidden";
  }else{
    grupo.style.visibility = "visible";
    grupo.style.height = "auto";
  }
}

toggleClose(id){
  var i=0;
  let grupo = document.getElementById("dados"+i);
  while(grupo!=null){
    if(i!=id && i!=3){
      grupo.style.height = "0px";
      grupo.style.visibility = "hidden";
      this.myIcons[i] = "md-add";
    }else{
      this.myIcons[i] = "md-remove";
    }
    i++;
    grupo = document.getElementById("dados"+i);
  }
}
/**Função que adiciona um campo na relação de Respiracao*/
addRespiracao() {
  //guardando o div pai
  let divPai = document.getElementById("respiracao");
  //Criando o elemento DIV filho;
  let divFilho = document.createElement("div");
  //Definindo atributos ao campoFilho:
  divFilho.setAttribute("id","resp"+this.obsRespiracao);
  divFilho.setAttribute("class", "divitem4");
  //Inserindo o elemento filho no pai:
  divPai.appendChild(divFilho);
  //Escrevendo algo no filho recém-criado:
  document.getElementById("resp"+this.obsRespiracao).innerHTML = "<input class='divitem2' type='text' id='campoResp"+this.obsRespiracao+"'></input>";
  this.obsRespiracao++;
}

/**Função que Remove um campo na relação de Respiracao*/
removerRespiracao() {
    //só remove se já ouver um campo adicionado
    if(this.obsRespiracao > 0){
      this.obsRespiracao--;
      //Guardando o div pai
      let divPai = document.getElementById("respiracao");
      let text = "resp"+this.obsRespiracao;
      //Guardando o ultimo div filho criado
      let divFilho = document.getElementById(text);
      //Removendo o ultimo DIV do nó-pai:
      divPai.removeChild(divFilho);
    }
}
toggleGroup2(id,status){

  let grupo = document.getElementById("listRadio"+id);
  grupo.style.display = status;

}
}
