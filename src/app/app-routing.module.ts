import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialTbComponent } from './datatables/material-tb/material-tb.component';
import { MatTbRadiobtnComponent } from './datatables/mat-tb-radiobtn/mat-tb-radiobtn.component';
import { MatFullFeatureComponent } from './datatables/mat-full-feature/mat-full-feature.component';


const routes: Routes = [
  { path: '', component: MaterialTbComponent},
  { path: 'radio', component: MatTbRadiobtnComponent},
  { path: 'featured', component: MatFullFeatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
