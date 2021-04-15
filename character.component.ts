import { Component, OnInit } from '@angular/core';
import {  OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { GotService } from '../got.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers:[Location]
})
export class CharacterComponent implements OnInit {
  public arrayname: any;
  public errormsg:boolean | undefined;
  public goback():any {
      this.location.back();       
     }


  constructor(public _route: ActivatedRoute, router:Router,public gotservice:GotService,private location:Location) {  console.log("constructor is called");}

  public getcharacters():any {
    //Character
    
    this.gotservice = this.gotservice.getcharacters().subscribe(
      (        data: any) =>{
            this.arrayname = data;
            console.log(this.arrayname);
            console.log(data);
            for(let i of data){
                console.log(i.name);
                
            }
            this.arrayname.sort(function(a: { aliases: any; }, b: { aliases: any; }){
                let nameA=a.aliases, nameB=b.aliases;
                if (nameA < nameB) 
                    return -1 

                    if (nameA > nameB)
                    return 1
                return 0 
            })
        },
      (        error: { errorMessage: any; }) => {
            this.errormsg = true;
            console.log(this.errormsg);
            console.log("some error occured");
           
        }
    )
    
}


  ngOnInit(): void {
    console.log("ngoninit called");
    this.getcharacters();
  }


}
