import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialTbComponent } from './datatables/material-tb/material-tb.component';
import { MatTbRadiobtnComponent } from './datatables/mat-tb-radiobtn/mat-tb-radiobtn.component';
import { MatFullFeatureComponent } from './datatables/mat-full-feature/mat-full-feature.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTbComponent,
    MatTbRadiobtnComponent,
    MatFullFeatureComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,

    AppRoutingModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
