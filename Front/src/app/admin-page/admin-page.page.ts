import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { NgForm } from '@angular/forms'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation ,bounceAnimation,bounceInOnEnterAnimation,slideInLeftOnEnterAnimation,slideInRightOnEnterAnimation, slideInUpOnEnterAnimation} from 'angular-animations';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
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
export class AdminPagePage implements OnInit {
  showPassword = false;

  checkpassword : boolean = false;
  checkemail : boolean = false;

  checkpasswordStyle : boolean = false
  checkEmailStyle : boolean = false

  countmail : number = 0
  countpassword : number = 0


  @ContentChild(IonInput) input: IonInput;
  constructor(private router: Router) { }

  ngOnInit() {
    document.title = "Admin - Epicroadtrip";

  }
  togglePasswordView() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

  async submit (form: NgForm) {
    console.log(form.value)
    var email = form.value.email
    var password = form.value.password

    if(this.checkpassword == true && this.checkemail == true )
    {
      ApiService.prototype.login(email,password).then((res)=>{
        console.log(res)
        localStorage.setItem("token" , res.data.token)
        ApiService.prototype.getUser(res.data.token).then((res)=>{
          localStorage.setItem("user" , res.data.firstname)
          localStorage.setItem("userId" , res.data.id)
          this.router.navigate(['/accueil'])
        })
      })
    }
  }
  checkStrength(p) {
    // 1
    let force = 0;
  
    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);
  
    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];
  
    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }
  
    // 5
    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;
  
    // 6
    force = (p.length <= 6) ? Math.min(force, 10) : force;
  
    // 7
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 30) : force;
    force = (passedMatches === 4) ? Math.min(force, 40) : force;
  

    if(force == 40)
    {
      this.checkpassword = true
      this.checkpasswordStyle = true;
    }
    else
    {
      this.checkpassword = false;
      this.checkpasswordStyle = false;
      this.countpassword ++

    }
  }

  checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email) == true)
    {
      this.checkemail = true
      this.checkEmailStyle = true;

    }
    else
    {
      this.checkemail = false
      this.checkEmailStyle = false;
      this.countmail ++  
    }
  }

}
