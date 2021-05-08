import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../../user';
import { OptionsService } from '../../options.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-discussion-users',
  templateUrl: './discussion-users.component.html',
  styleUrls: ['./discussion-users.component.css']
})
export class DiscussionUsersComponent implements OnInit, OnDestroy {
  public data: [][];
  public users: IUser[];
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private optionsService: OptionsService,
  private http: HttpClient) { }

  ngOnInit() {
    //this.getAllStudents();
  }

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getAllStudents(): void{
  // this.optionsService.getAllStudents()
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(users => {
  //       this.users = <IUser[]>users;
  //     })
  }

  onSubmit(data): void{
  this.optionsService.save(data);
  }

  onFileChange(evt: any) {
        const target : DataTransfer =  <DataTransfer>(evt.target);

        if (target.files.length !== 1) throw new Error('Cannot use multiple files');

        const reader: FileReader = new FileReader();

        reader.onload = (e: any) => {
          const bstr: string = e.target.result;

          const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

          const wsname : string = wb.SheetNames[0];

          const ws: XLSX.WorkSheet = wb.Sheets[wsname];

          this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

          this.arrayLengthOneDimension = this.data.length;
          this.averageMark = this.arrayLength/this.arrayLengthOneDimension;


          let x = this.data.slice(1);
        };

        reader.readAsBinaryString(target.files[0]);

      }
}
