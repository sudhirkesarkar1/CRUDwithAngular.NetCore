import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  @Output() customerAdded: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }
  addCustomer() {
    const customerToAdd = this.form.value;
    this.customerAdded.emit(customerToAdd);
  }

}
