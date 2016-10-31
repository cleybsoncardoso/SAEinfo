import {NavController, AlertController, LoadingController } from 'ionic-angular';
import {PacientesPage} from '../pacientes/pacientes';
import {Http} from "@angular/http";
import { EsqueciSenhaPage } from '../esqueci-senha/esqueci-senha';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  private coren : string;
  private senha : string;

  constructor(private nav: NavController, private http : Http, private alert :AlertController, private loading : LoadingController) {
  }

  entrar(){
    let username = this.coren;
    let password = this.senha;
    let type = "login";
    let data = JSON.stringify({type, username, password});
    let link = "http://localhost/saeApi.php";

    this.http.post(link, data)
        .subscribe(data=>{
            let loader = this.loading.create({
                content: "Checking ! Please wait...",
                duration: 1000
            });
            loader.present();
          this.nav.setRoot(PacientesPage);
        },error => {
            let alert = this.alert.create({
                title: 'Warning',
                subTitle: 'Wrong Username or Password! Please Try Again !',
                buttons: ['OK']
            });
            alert.present();
        });
  }

  esqueci(){
    this.nav.setRoot(EsqueciSenhaPage);
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
  }
