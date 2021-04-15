
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { GotService } from "../got.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
  providers:[Location]
})
export class HouseComponent implements OnInit {
  public arrayname: any;
  public errormsg: boolean = false;
  public v2: boolean = false;
  public v1: boolean = false;
  location: any;
  public goback():any {
      this.location.back();       
     }

  constructor(public _route:ActivatedRoute,router:Router,public gotservice:GotService,location:Location) {console.log("constructor is called"); }

  public gethouses():any {
    //Houses
    let names = this.arrayname;
    this.gotservice = this.gotservice.gethouses().subscribe(
      (        data: any) =>{
            
            this.v1=true;
            this.arrayname = data;
            console.log(this.arrayname);
            console.log(data);
            for(let i of data){
                console.log(i.name);
                
            }
            this.arrayname.sort(function(a: { name: string; }, b: { name: string; }){
                let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
        },
      (        error: { errorMessage: any; }) => {
            this.errormsg = true;
            console.log(this.errormsg);
            console.log("some error occured");
            console.log(error.errorMessage);
        }
    )
    
}


  ngOnInit(): void {
    console.log("ngoninit called");
        this.gethouses();
  }

}
