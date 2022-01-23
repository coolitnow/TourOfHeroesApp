import { NgModule } from '@angular/core';
//necessary for routing functionality
import { RouterModule, Routes } from '@angular/router';
//gives router somewhere to go once configured
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
