import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../../shared/model/customer.model';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  @Input() allcustomers: Customer[];
  constructor() { }

  ngOnInit() {
  }

}
