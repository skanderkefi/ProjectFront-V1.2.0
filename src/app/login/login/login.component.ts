import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../dataService/data.service';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login={"email":"","password":""}

  constructor(public http:Http,
    public activatedRoute:ActivatedRoute,
    public dataService:DataService,
    public router : Router,
    public translate: TranslateService) {
      translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
     }

  ngOnInit() {
  }

loginF(){
  this.dataService.loginS(this.login)
  .then((res)=>{
    this.router.navigate(['/home']);
    console.log("u r logged in !");
  })
  .catch((err)=>{
    this.router.navigate(['/']);
    console.log("u r not logged in ! ");
    console.log(err);


  })
  
}
}
