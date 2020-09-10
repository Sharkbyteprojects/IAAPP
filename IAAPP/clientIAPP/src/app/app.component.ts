import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'IAAPP';
  authorized:boolean = false;
  una:boolean = false;
  constructor(private http:HttpClient) { }
  onlogins(inpus:string){
    class items{
      public authorized:boolean;
    };
    this.http.post<items>("/api/login", {pw: inpus}).subscribe(list=>{
      if(list.authorized){
        this.authorized=true;
		this.una=false;
      }else{
		this.authorized=false;
		this.una=true;
	  }
    });
  }
  logouts(){
    this.authorized=false;
	this.una=false;
  }
}
