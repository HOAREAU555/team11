import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { NgForm } from '@angular/forms'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation ,bounceAnimation,bounceInOnEnterAnimation,slideInLeftOnEnterAnimation,slideInRightOnEnterAnimation, slideInUpOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { }
  capteur_humidite: []
  ngOnInit() {
    this.get_capteur()
  }

  async get_capteur() {
     ApiService.prototype.GetCapteur("capteurs_humidite", "desc").then((res) => {
      console.log(res)
     })
  }
}
