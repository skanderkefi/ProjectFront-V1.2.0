import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import {DataService} from './dataService/data.service';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component'
import {NavbarComponent} from './navbar/navbar/navbar.component'
import {RouterModule, Routes} from '@angular/router'
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const appRoute:Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:LoginComponent},
  {path:'registration', component:RegistrationComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
