import { Component, OnInit,OnDestroy, ViewContainerRef } from '@angular/core';
import { Location } from "@angular/common";
import { GotService } from '../got.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Location]
})
export class BookComponent implements OnInit {
  public arrayname: any = [];
  public errormsg: boolean = false;
  public goback(): any {
    this.location.back();
  }

  constructor(public _route: ActivatedRoute, router: Router, public gotservice: GotService, public location: Location) {
    (
      console.log("constructer is called")
    )
  }
  public i: any
  public getbooks(): any {
    this.gotservice = this.gotservice.getbooks().subscribe(

      (data: any) => {
        this.arrayname = data;

        console.log(data);
        console.log(this.arrayname);
        for (let i of data) {
          console.log(i.name);

        }
        this.arrayname.sort(function (a: { name: string; }, b: { name: string; }) {
          let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
            return -1
          if (nameA > nameB)
            return 1
          return 0 //default return value (no sorting)
        })

      },
      (error: { errorMessage: any; }) => {
        this.errormsg = true;
        console.log(this.errormsg);
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

  }

  ngOnInit(): void {
    console.log("ngoninit called");
    this.getbooks();
  }


}
