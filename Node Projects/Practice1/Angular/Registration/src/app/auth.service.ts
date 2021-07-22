import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';



const BACKEND_URL = "http://localhost:3000/regsitration/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient, private Router : Router) { }



  public signup(body){
    const url = BACKEND_URL+'signup';
    const response = this.http.post(url,body).pipe(map(res => res));
    return response;
  }


}
