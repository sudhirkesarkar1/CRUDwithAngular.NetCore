import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { CustomerformComponent } from './customer/customerform/customerform.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerlistComponent,
    CustomerformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
