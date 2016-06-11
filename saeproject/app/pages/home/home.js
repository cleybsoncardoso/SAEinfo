import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PrincipalPage} from './pages/principal/principal';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(_navController) {
    this._navController = _navController;
  }
  entrar(){
    this.raiz = PrincipalPage;
  }
  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
