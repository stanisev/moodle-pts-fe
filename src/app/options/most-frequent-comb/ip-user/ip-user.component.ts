import { Component, OnInit, OnDestroy } from "@angular/core";
import { OptionsService } from "../../options.service";
import { IUser } from '../../user';
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-ip-user",
  templateUrl: "./ip-user.component.html",
  styleUrls: ["./ip-user.component.css"]
})
export class IpUserComponent implements OnInit {
  public grade = '';
  public data: IUser[];

  constructor(private optionsService: OptionsService) {
  }

   ngOnInit() {
   this.optionsService.findAll().subscribe(result => {
     this.data = result;
   });
   }

   findStudent(id: any) {
   const result = [];
   for(let i in id) {
   result.push([i, id[i]]);
   }
   console.log(result[0][1]);
   this.optionsService.findById(result[0][1]).subscribe(result => {
     this.grade = result;
   });


   }
}
