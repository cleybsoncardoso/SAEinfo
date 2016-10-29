import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { PacientesPage } from '../pages/pacientes/pacientes';
import {AlterarSenhaPage} from '../pages/alterar-senha/alterar-senha';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  pages: Array<{title: string, component: any}>;
  rootPage: any = HomePage;
  private alterarsenha:any = AlterarSenhaPage;
  private pacientes:any = PacientesPage;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'Login', component: HomePage },
      { title: 'Login', component: HomePage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    this.nav.setRoot(page);
  }

  sair(){
    this.nav.setRoot(HomePage);

  }
}
