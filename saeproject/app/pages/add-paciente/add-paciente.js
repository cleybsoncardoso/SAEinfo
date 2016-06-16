import {NavController, Page} from 'ionic-angular';


/*
  Generated class for the AddPacientePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-paciente/add-paciente.html',
})
export class AddPacientePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
