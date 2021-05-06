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
export class IpUserComponent implements OnInit, OnDestroy {
  public result: IUser[];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
    this.getAllStudents();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getAllStudents():void {
    this.optionsService
      .getAllStudents()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        this.result = <IUser[]>result;
      });
  }
}
