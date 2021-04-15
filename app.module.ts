import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Injectable, ViewContainerRef  } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{BookComponent} from './book/book.component';
import { AppComponent } from './app.component';
import {RouterModule,Routes,Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import{GotService} from './got.service';
import { Observable } from 'rxjs';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { CharacterComponent } from './character/character.component';
import { Characterinfocomponent } from './characterinfo/characterinfo.component';
import { HouseComponent } from './house/house.component';
import { HouseinfoComponent } from './houseinfo/houseinfo.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';



@NgModule({
  declarations: [
    BookComponent,
    View1Component,
    View2Component,
    CharacterComponent,
    Characterinfocomponent,
    HouseComponent,
    HouseinfoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'book', component:BookComponent},
      {path:'view1',component:View1Component},
      {path:'view2',component:View2Component},
      {path:'bookinfo',component:BookinfoComponent},
      {path:'house',component:HouseComponent},
      {path:'houseinfo',component:HouseinfoComponent},
      {path:'character', component:CharacterComponent},
      {path:'characterinfo',component:Characterinfocomponent}
    
    ])


  ],
  
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  
    
  ],
  exports :[
    RouterModule,
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }