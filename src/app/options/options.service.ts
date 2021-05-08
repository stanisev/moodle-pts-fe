import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IUser } from './user';

@Injectable({
  providedIn: "root"
})
export class OptionsService {
  private studentsUrl: string = 'http://localhost:8080/students';
  private gradeUrl: string = 'http://localhost:8080/students/';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.studentsUrl);
      }

  public save(user: IUser) {
      return this.http.post<IUser>(this.studentsUrl, user);
    }

  public findById(id: any): Observable<string> {
    return this.http.get<any>(this.gradeUrl+id);
  }
}
