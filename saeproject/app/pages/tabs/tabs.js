import {Component} from 'ionic-angular';
import {AddPacientePage} from '../../pages/add-paciente/add-paciente';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root = Page1;
  tab2Root = Page2;
  tab3Root = Page3;

  constructor() {

  }
}
