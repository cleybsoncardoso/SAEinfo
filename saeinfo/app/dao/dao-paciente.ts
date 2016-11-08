import {CadastroPaciente} from "../model/cadastroPaciente";

export class DAOPacientes {

  private list: Array<CadastroPaciente>;

  constructor(){
    let carlos = new CadastroPaciente();
    carlos.nome = "Carlos";
    let jorge = new CadastroPaciente();
    jorge.nome = "Jorge";
    
    this.list = [carlos, jorge];

  }

  getList(){
    return this.list;
  }

  insert(paciente){
    this.list.push(paciente);
  }

  edit(paciente){

  }

  delete(paciente){
    let id = this.list.indexOf(paciente);
    this.list.splice(id, 1);
  }

}
