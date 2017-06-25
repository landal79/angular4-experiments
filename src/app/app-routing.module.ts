import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'examples', pathMatch: 'full'},
  { path: 'home', redirectTo: 'examples', pathMatch: 'full'},
  { path: 'examples', loadChildren: 'app/examples/examples.module#ExamplesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
