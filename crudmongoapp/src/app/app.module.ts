import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";  
import { EmprecordService } from "../app/emprecord.service";
import { AddemployeeComponent } from './addemployee/addemployee.component'; 
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,  
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,NgxPaginationModule,Ng2SearchPipeModule
  ],
  providers: [EmprecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
