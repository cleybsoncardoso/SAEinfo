import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import {PacientesPage} from '../pages/pacientes/pacientes';
import {AlterarSenhaPage} from '../pages/alterar-senha/alterar-senha';
import {CadastroPaciente} from '../model/cadastroPaciente';
import {IdentificacaoPage} from '../pages/formulario/identificacao/identificacao';
import {EntrevistaPage} from '../pages/formulario/entrevista/entrevista';
import {SegurancaFisicaPage} from '../pages/formulario/seguranca-fisica/seguranca-fisica';
import {ObservacoesPage} from '../pages/formulario/observacoes/observacoes';




@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    CadastroPaciente,
    IdentificacaoPage,EntrevistaPage, ObservacoesPage,SegurancaFisicaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    EsqueciSenhaPage,
    PacientesPage,
    AlterarSenhaPage,
    CadastroPaciente,
    IdentificacaoPage,EntrevistaPage, ObservacoesPage, SegurancaFisicaPage
  ],
  providers: []
})
export class AppModule {}
