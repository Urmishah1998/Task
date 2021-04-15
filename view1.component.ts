
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { GotService } from "../got.service";

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css'],
  providers:[Location]
})
export class View1Component implements OnInit {

  public h="/house";
  public c="/character";
  public b="/book";
  constructor(public _route:ActivatedRoute,public router:Router,public gotservice:GotService,private location:Location) {
    console.log("constructor is called");
  }
  public gohouse() {
    console.log("Button clicked");
   
}
public gocharacter() {
    this.router.navigate(['/Character']);
}
public gobook() {
    this.router.navigate(['/Book']);
}
  ngOnInit(): void {
  }

}
