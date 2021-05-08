import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpUserComponent } from './most-frequent-comb/ip-user/ip-user.component';
import { DiscussionUsersComponent } from './other/discussion-users/discussion-users.component';
import { UploaderComponentComponent } from './other/uploader-component/uploader-component.component';
import { UploaderDateComponent } from './other/uploader-date/uploader-date.component';

const routes: Routes = [
  {path:'grades', component:IpUserComponent },
  {path:'discussions', component: DiscussionUsersComponent},
  {path:'upload', component: UploaderComponentComponent},
  {path:'discussions-date', component: UploaderDateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
