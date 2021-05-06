import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpUserComponent } from './most-frequent-comb/ip-user/ip-user.component';
import { DiscussionUsersComponent } from './other/discussion-users/discussion-users.component';

const routes: Routes = [
  {path:'grades', component:IpUserComponent },
  {path:'discussions', component: DiscussionUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
