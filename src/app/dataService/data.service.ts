import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(public http:Http) { }

  addData(user){
    return this.http.post('http://localhost:8080/api/v1/employees',user).pipe(map(res => res.json()));

   }

   getData(){
    return this.http.get('http://localhost:8080/api/v1/employees').pipe(map(res => res.json()));
   }


  loginS(login){
    return new Promise((resolve,reject)=>{
      this.http.post("http://localhost:8080/api/v1/connect",login).toPromise()
      .then(userData=>resolve(userData),err=>reject(err));

    });
  }

  //  results: Array<JSON>[20];

  // loginS(login) {
  //   let promise = new Promise((resolve, reject) => {
  //     this.http.post("http://localhost:8080/api/v1/connect",login)
  //       .toPromise()
  //       .then(
  //         userData=>resolve(userData)
  //         ,
  //         err => { // Error
  //         reject(err);
  //         }
  //       );
  //   });
  //   return promise;
  // }
  }


