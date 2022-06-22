import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/authgard.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const routes: Routes = [
  {
    path: 'auth',
    // importar rutas hijas para lazy load
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
