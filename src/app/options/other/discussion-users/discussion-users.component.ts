import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../../user';
import { OptionsService } from '../../options.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-discussion-users',
  templateUrl: './discussion-users.component.html',
  styleUrls: ['./discussion-users.component.css']
})
export class DiscussionUsersComponent implements OnInit, OnDestroy {
  public users: IUser[];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private optionsService: OptionsService,
  private http: HttpClient) { }

  ngOnInit() {
    this.getAllStudents();
  }

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getAllStudents(): void{
    this.optionsService.getAllStudents()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(users => {
          this.users = <IUser[]>users;
        })
  }

  onSubmit(data): void{
  this.http.post('localhost:8080/save', data).subscribe((result)=>{console.warn(result)});
  }
}
