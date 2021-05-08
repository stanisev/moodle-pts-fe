import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OptionsRoutingModule } from "./options-routing.module";
import { IpUserComponent } from "./most-frequent-comb/ip-user/ip-user.component";
import { HttpClientModule } from "@angular/common/http";
import { DiscussionUsersComponent } from "./other/discussion-users/discussion-users.component";
import { UploaderComponentComponent } from './other/uploader-component/uploader-component.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { FormsModule }   from '@angular/forms';
import { UploaderDateComponent } from './other/uploader-date/uploader-date.component';

@NgModule({
  declarations: [IpUserComponent, DiscussionUsersComponent, UploaderComponentComponent, UploaderDateComponent],
  imports: [CommonModule, HttpClientModule, OptionsRoutingModule, AngularFileUploaderModule, FormsModule]
})
export class OptionsModule {}
