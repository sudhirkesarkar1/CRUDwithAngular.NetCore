import { Component, OnInit } from '@angular/core';
import {CustomerDataService} from '../core/customer/customer-data.service';
import {Customer} from '../shared/model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private cdService: CustomerDataService) { }

  customers: Customer[];
  ngOnInit() {
    this.customerGetAll();
  }

  customerGetAll() {
    this.cdService.getAll().subscribe(customer => this.customers =  customer);
  }

  customerAdded(customer: Customer){
    this.cdService.addCustomer(customer).subscribe(cust => this.customerGetAll());
  }

}
