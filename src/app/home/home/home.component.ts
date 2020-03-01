import { Component, OnInit } from '@angular/core';
import {DataService} from '../../dataService/data.service'
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any=[];
  constructor(public dataService : DataService,
    public translate: TranslateService) {
    this.displayAll();
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   
    
   }

  ngOnInit() {
  }

  displayAll(){
    this.dataService.getData().subscribe(users => this.users=users);
  }

}
