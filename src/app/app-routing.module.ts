import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialTbComponent } from './datatables/material-tb/material-tb.component';


const routes: Routes = [
  { path: '', component: MaterialTbComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
