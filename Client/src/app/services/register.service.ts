import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  loginUrl = 'http://localhost:8080/api/v1/login'
  
  addUser(user: User) {
    return this.http.post<User>(this.loginUrl, user, this.httpOptions)
  }
}
