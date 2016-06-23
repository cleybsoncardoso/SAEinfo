import {Page, ViewController, Alert, NavController} from 'ionic-angular';
import {Paciente} from '../../model/paciente';

@Page({
  templateUrl: 'build/pages/add-paciente2/add-paciente2.html',
})
export class AddPacientePage2 {
  static get parameters() {
      return [[ViewController],[NavController]];
  }

  constructor(view, nav) {
    this.view = view;
    this.paciente = new Paciente();
    this.qtdeOutros = 0;
    this.qtdeAlergias = 0;
    this.qtdeVacinas = 0;
    this.nav = nav;
    this.opcoesConciencia=[];
    this.opcoesPupila=[];
    this.opcoesMMSS=[];
    this.opcoesMMII=[];
    this.opcoesFala=[];

  }

  /**Função que adiciona um campo na relação de antecedentes*/
  addAntecedente() {
    //guardando o div pai
    let divPai = document.getElementById("outrosAntecetendes");
    //Criando o elemento DIV filho;
    let divFilho = document.createElement("div");
    //Definindo atributos ao campoFilho:
    divFilho.setAttribute("id","antecedente"+this.qtdeOutros);
    //Inserindo o elemento filho no pai:
    divPai.appendChild(divFilho);
    //Escrevendo algo no filho recém-criado:
    document.getElementById("antecedente"+this.qtdeOutros).innerHTML = "<input class='divitem' type='text' id='campoAntecedente"+this.qtdeOutros+"'></input>";
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
    document.getElementById("alergia"+this.qtdeAlergias).innerHTML = "<label class='divitem3'></label><input class='divitem2' type='text' id='campoAlergia"+this.qtdeAlergias+"'></input>";
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

  /**Função que adiciona um campo na relação de Alergia*/
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
    document.getElementById("vacina"+this.qtdeVacinas).innerHTML = "<label class='divitem3'></label><input class='divitem2' type='text' id='campoVacina"+this.qtdeVacinas+"'></input>";
    this.qtdeVacinas++;
  }

  /**Função que Remove um campo na relação de Alergia*/
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

  salvar(){
    this.view.dismiss(this.paciente);
  }

  cancel(){
    this.view.dismiss();
  }

  consciencia(){
    let alert = Alert.create();
    alert.setTitle('Consciencia');

    alert.addInput({
      type: 'checkbox',
      label: 'Alerta',
      value: 'Alerta',
      checked: this.verifica(this.opcoesConciencia,"Alerta")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Letárgico',
      value: 'Letárgico',
      checked: this.verifica(this.opcoesConciencia,"Letárgico")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Obnubilado',
      value: 'Obnubilado',
      checked: this.verifica(this.opcoesConciencia,"Obnubilado")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Torporoso',
      value: 'Torporoso',
      checked: this.verifica(this.opcoesConciencia,"Torporoso")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Comatoso',
      value: 'Comatoso',
      checked: this.verifica(this.opcoesConciencia,"Comatoso")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Glasgow',
      value: 'Glasgow',
      checked: this.verifica(this.opcoesConciencia,"Glasgow")
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.opcoesConciencia = data;
        if(this.opcoesConciencia.length!=0){
          document.getElementById("botaoConsciencia").style.background = '#ff0000';
        }else{
          document.getElementById("botaoConsciencia").style.background = '#0076ff';
        }
      }
    });
    this.nav.present(alert);

  }

  pupilas(){
    let alert = Alert.create();
    alert.setTitle('Pupilas');

    alert.addInput({
      type: 'checkbox',
      label: 'Isocóricas',
      value: 'Isocóricas',
      checked: this.verifica(this.opcoesPupila,"Isocóricas")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Anisocóricas',
      value: 'Anisocóricas',
      checked: this.verifica(this.opcoesPupila,"Anisocóricas")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Miose',
      value: 'Miose',
      checked: this.verifica(this.opcoesPupila,"Miose")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Midríase',
      value: 'Midríase',
      checked: this.verifica(this.opcoesPupila,"Midríase")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'RFM',
      value: 'RFM',
      checked: this.verifica(this.opcoesPupila,"RFM")
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.opcoesPupila = data;
        if(this.opcoesPupila.length!=0){
          document.getElementById("botaoPupila").style.background = '#ff0000';
        }else{
          document.getElementById("botaoPupila").style.background = '#0076ff';
        }
      }
    });
    this.nav.present(alert);

  }

  mmss(){

    let alert = Alert.create();
    alert.setTitle('Mobilidade Física MMSS');

    alert.addInput({
      type: 'checkbox',
      label: 'Preservada',
      value: 'Preservada',
      checked: this.verifica(this.opcoesMMSS,"Preservada")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Paresia',
      value: 'Paresia',
      checked: this.verifica(this.opcoesMMSS,"Paresia")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Plegia',
      value: 'Plegia',
      checked: this.verifica(this.opcoesMMSS,"Plegia")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Parestesia',
      value: 'Parestesia',
      checked: this.verifica(this.opcoesMMSS,"Parestesia")
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.opcoesMMSS = data;
        if(this.opcoesMMSS.length!=0){
          document.getElementById("botaoMMSS").style.background = '#ff0000';
        }else{
          document.getElementById("botaoMMSS").style.background = '#0076ff';
        }
      }
    });
    this.nav.present(alert);

  }

  mmii(){

    let alert = Alert.create();
    alert.setTitle('Mobilidade Física MMII');

    alert.addInput({
      type: 'checkbox',
      label: 'Preservada',
      value: 'Preservada',
      checked: this.verifica(this.opcoesMMII,"Preservada")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Paresia',
      value: 'Paresia',
      checked: this.verifica(this.opcoesMMII,"Paresia")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Plegia',
      value: 'Plegia',
      checked: this.verifica(this.opcoesMMII,"Plegia")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Parestesia',
      value: 'Parestesia',
      checked: this.verifica(this.opcoesMMII,"Parestesia")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Movimentos lentos',
      value: 'Movimentos lentos',
      checked: this.verifica(this.opcoesMMII,"Movimentos lentos")
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Movimentos involuntários',
      value: 'Movimentos involuntários',
      checked: this.verifica(this.opcoesMMII,"Movimentos involuntários")
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.opcoesMMII = data;
        if(this.opcoesMMII.length!=0){
          document.getElementById("botaoMMII").style.background = '#ff0000';
        }else{
          document.getElementById("botaoMMII").style.background = '#0076ff';
        }
      }
    });
    this.nav.present(alert);

  }

  fala(){

    let alert = Alert.create();
    alert.setTitle('Mobilidade Física MMII');


        alert.addInput({
          type: 'checkbox',
          label: 'Afonia',
          value: 'Afonia',
          checked: this.verifica(this.opcoesFala,"Afonia")
        });

        alert.addInput({
          type: 'checkbox',
          label: 'Dislalia',
          value: 'Dislalia',
          checked: this.verifica(this.opcoesFala,"Dislalia")
        });

        alert.addInput({
          type: 'checkbox',
          label: 'Disartria',
          value: 'Disartria',
          checked: this.verifica(this.opcoesFala,"Disartria")
        });

        alert.addInput({
          type: 'checkbox',
          label: 'Disfasia',
          value: 'Disfasia',
          checked: this.verifica(this.opcoesFala,"Disfasia")
        });

        alert.addInput({
          type: 'checkbox',
          label: 'Afasia',
          value: 'Afasia',
          checked: this.verifica(this.opcoesFala,"Afasia")
        });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.opcoesFala = data;
        if(this.opcoesFala.length!=0){
          document.getElementById("botaoFala").style.background = '#ff0000';
        }else{
          document.getElementById("botaoFala").style.background = '#0076ff';
        }
      }
    });
    this.nav.present(alert);

  }


  verifica(tipo, sintoma){
    if(tipo.indexOf(sintoma) != -1)
    {
       return true;
    }
    return false;
  }


}
