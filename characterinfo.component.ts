import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { GotService } from "../got.service";

@Component({
  selector: 'app-characterinfo',
  templateUrl: './characterinfo.component.html',
  styleUrls: ['./characterinfo.component.css']
})
export class Characterinfocomponent implements OnInit {
  public arrayname: any[] = [];
  public carddetails: any;
  public curname: any
  public t: any
  public a: any
  public c: any
  public s:any
  public errormsg: boolean = false;
  public show:boolean = false;   
  public arraydetails:any=[]; 
  constructor(public _route:ActivatedRoute,router:Router,public gotservice:GotService,private location:Location) {
      console.log("constructor is called");
      
  }
  //View-1
  public getcharacters():any {
      //Houses
      let names = this.arrayname;
      this.gotservice = this.gotservice.getcharacters().subscribe(
        (          data: any[]) =>{
              this.arrayname = data;
              this.carddetails = data;
              console.log(this.arrayname);
              console.log(data);
              console.log(this.carddetails);
              for(let i of data){
                  for(let o=0;o<i.aliases.length;o++){
                      console.log(i.aliases[o]);
                  }
              }
              
              this.arrayname.sort(function(a, b){
                  let nameA=a.aliases, nameB=b.aliases;
                  if (nameA < nameB) //sort string ascending
                      return -1 
                  if (nameA > nameB)
                      return 1
                  return 0 //default return value (no sorting)
              })
          },
        (          error: { errorMessage: any; }) => {
              this.errormsg = true;
              console.log(this.errormsg);
              console.log("some error occured");
              console.log(error.errorMessage);
          }
      )
  }
  public showdetails(iname: any)  {
      
      //console.log(iname);
      console.log(this.carddetails);
      for(let k of this.carddetails)
      {
          console.log(k.aliases);
          for(let o=0;o<k.aliases.length;o++){
              console.log(k.aliases[o]);
              if(iname == k.aliases[o])
              {
                  console.log(k.aliases[o]);
                  this.arraydetails = k;
                  console.log(this.arraydetails);
              } 
          }
          
      }
      console.log(this.arraydetails);
  }  
  ngOnInit() {   
      console.log("ngoninit called");
      this.getcharacters();
      console.log(this.arraydetails);
      
  }

}
