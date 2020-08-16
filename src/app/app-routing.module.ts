import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryListComponent } from './_pages/repository-list/repository-list.component';
import { UserComponent } from './_pages/user/user.component';
import { NotFoundComponent } from './_pages/errors/not-found/not-found.component';
import { RepositoryListResolver } from './_pages/repository-list/repository-list.resolver';


const routes: Routes = [
  {
    path: 'user/:name',
    component: RepositoryListComponent,
    resolve: {
      repositorys: RepositoryListResolver
    }
  },
  {
    path: '',
    component: UserComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
