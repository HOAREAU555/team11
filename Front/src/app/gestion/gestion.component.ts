import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { NgForm } from '@angular/forms'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation ,bounceAnimation,bounceInOnEnterAnimation,slideInLeftOnEnterAnimation,slideInRightOnEnterAnimation, slideInUpOnEnterAnimation} from 'angular-animations';


@Component({
  selector: 'gestion.component',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceAnimation(),
    bounceInOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    slideInRightOnEnterAnimation(),
    slideInUpOnEnterAnimation()
  ]
})
export class GestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  async submit (form) {
    console.log(form.value)
  }
}
