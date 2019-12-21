import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Customer} from '../../shared/model/customer.model';
import { Observable} from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({
    'content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  private controllerEndpoint = 'customers';

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.endpoint}${this.controllerEndpoint}`);
  }

  addCustomer(customer: Customer): Observable<any>{
    return this.http.post<Customer[]>(`${environment.endpoint}${this.controllerEndpoint}`, customer, httpOptions );
  }
}
