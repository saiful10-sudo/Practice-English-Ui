import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import {AccountComponent} from "./account.component";


const routes: Routes = [
  {
    path: '',
    component: AccountComponent
  },
  {
    path: 'my-account',
    component: UserAccountComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
