import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemsComponent } from './list-items/list-items.component';

const routes: Routes = [
  {
    path: 'items',
    component: ListItemsComponent
  },
  {
    path: 'edit',
    component: EditItemComponent
  },
  {
    path: '',
    redirectTo: '/items', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
