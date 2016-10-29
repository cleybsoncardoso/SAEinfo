import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';
<<<<<<< HEAD
<<<<<<< HEAD

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
=======
=======
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { PacientesPage } from '../pages/pacientes/pacientes';
import {AlterarSenhaPage} from '../pages/alterar-senha/alterar-senha';
<<<<<<< HEAD
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
=======
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
<<<<<<< HEAD
<<<<<<< HEAD
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
=======
=======
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  private alterarsenha:any = AlterarSenhaPage;
  private pacientes:any = PacientesPage;
<<<<<<< HEAD
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
=======
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
<<<<<<< HEAD
<<<<<<< HEAD
      { title: 'Hello Ionic', component: HelloIonicPage },
=======
      { title: 'Login', component: HomePage },
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
=======
      { title: 'Login', component: HomePage },
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
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
<<<<<<< HEAD
<<<<<<< HEAD
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
=======
=======
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
    this.nav.setRoot(page);
  }

  sair(){
    this.nav.setRoot(HomePage);
<<<<<<< HEAD
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
=======
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
  }
}
