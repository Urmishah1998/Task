import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  public baseurl = "https://www.anapioficeandfire.com/api";

  constructor(private _http:HttpClient) {

   }
   public handleError(err:HttpErrorResponse) {
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public gethouses():any {
    let resp = this._http.get(this.baseurl+'/houses');
    console.log(resp);
    return resp;
  }


  public getcharacters():any {
    let resp = this._http.get(this.baseurl+'/characters');
    console.log(resp);
    return resp;
  }

  //Display all books 
  public getbooks():any {
    let resp = this._http.get(this.baseurl+'/books');
    console.log(resp);
    return resp;
  }
}   

