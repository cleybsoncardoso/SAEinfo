export class DAOPacientes {

  private list: Array<Object>;

  constructor(){
    this.list = [{nome: "Jorge"}, {nome: "Carlos"}];

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
