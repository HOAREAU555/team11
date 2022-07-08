import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component'
import { GestionComponent } from './gestion/gestion.component'

const routes: Routes = [
  {
    path: '',   redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login-page.module').then(
        (m) => m.LoginPagePageModule
      ),
  },
  { 
    path: 'accueil',
    component: AccueilComponent 
  },
  { 
    path: 'gestion',
    component: GestionComponent 
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-page/admin-page.module').then(
        (m) => m.AdminPagePageModule
      ),
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
