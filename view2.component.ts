
import { ActivatedRoute, Router,RouterModule } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { GotService } from "../got.service";
import { Window } from "selenium-webdriver";


@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css'],
  providers:[Location]
})
export class View2Component implements OnInit {
  public h = "/houseinfo";
    public c = "/characterinfo";
    public b = "/bookinfo";
    

  constructor(public _route:ActivatedRoute,public router:Router,public gotservice:GotService,private location:Location) { console.log("constructor is called");
}

  ngOnInit(): void {
    console.log("ngoninit called");

  }

}
