import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
<<<<<<< HEAD
=======
import { HomePage } from '../pages/home/home';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import {PacientesPage} from '../pages/pacientes/pacientes';
import {AlterarSenhaPage} from '../pages/alterar-senha/alterar-senha';
import {CadastroPaciente} from '../model/cadastroPaciente';
import {IdentificacaoPage} from '../pages/formulario/identificacao/identificacao';
import {EntrevistaPage} from '../pages/formulario/entrevista/entrevista';
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
<<<<<<< HEAD
    ListPage
=======
    ListPage,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    CadastroPaciente,
    IdentificacaoPage,EntrevistaPage
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
<<<<<<< HEAD
    ListPage
=======
    ListPage,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    CadastroPaciente,
    IdentificacaoPage,EntrevistaPage
>>>>>>> 8326e4fb69f478f60d2621372a221ab77d6f0383
  ],
  providers: []
})
export class AppModule {}
