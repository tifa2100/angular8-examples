import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialTbComponent } from './datatables/material-tb/material-tb.component';
import { MatTbRadiobtnComponent } from './datatables/mat-tb-radiobtn/mat-tb-radiobtn.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTbComponent,
    MatTbRadiobtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
