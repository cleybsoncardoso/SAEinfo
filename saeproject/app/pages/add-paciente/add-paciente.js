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
  }

  salvar(){
    this.view.dismiss(this.paciente);
  }

  cancel(){
    this.view.dismiss();
  }


}
