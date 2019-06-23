import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashValues() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  getDashImages() {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=flowers');
  }
}
