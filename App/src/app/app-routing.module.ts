import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdAddComponent } from './prod-add/prod-add.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { ProdGetComponent } from './prod-get/prod-get.component';

const routes: Routes = [
  { path: 'prod-add', component: ProdAddComponent },
  { path: 'prod-get', component: ProdGetComponent },
  { path: 'prod-edit', component: ProdEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
