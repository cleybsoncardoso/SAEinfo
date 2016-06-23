import {Component} from '@angular/core'
import {HomePage} from '../../pages/home/home';
import {AddPacientePage} from '../../pages/add-paciente/add-paciente';
import {EsqueciSenhaPage} from '../../pages/esqueci-senha/esqueci-senha';
import {AlterarSenhaPage} from '../../pages/alterar-senha/alterar-senha';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = EsqueciSenhaPage;
    this.tab2Root = AddPacientePage;
    this.tab3Root = AlterarSenhaPage;
  }
}
