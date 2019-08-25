import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:AppComponent},
  { path:'description',component:DescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
