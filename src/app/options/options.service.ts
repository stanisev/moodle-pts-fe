import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IStudentResult } from "./most-frequent-comb/ip-user/ip-user-result";
import { IUser } from './user';

@Injectable({
  providedIn: "root"
})
export class OptionsService {
  private url: string = "https://localhost:8080/";

  constructor(private http: HttpClient) {}

  public getAllStudents(): Observable<
    IUser[]
  > {
    let optionUrl: string = "students";
    return this.http
      .get<IUser[]>(this.url + optionUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Server returned code:${err.status}, error message is:${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
