import {NavController, Page} from 'ionic-angular';
import {PacientesPage} from '../../pacientes/pacientes';
import {SegurancaFisicaPage} from '../seguranca-fisica/seguranca-fisica';
/*
  Generated class for the ObservacoesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/formulario/observacoes/observacoes.html',
})
export class ObservacoesPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.qtdeObs = 0;
  }
  cancel(){
    this.nav.setRoot(PacientesPage);
  }
  slide(passar){
    if(passar.deltaX>0){
      this.nav.setRoot(SegurancaFisicaPage);
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


}
