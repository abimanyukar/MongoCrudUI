import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";  
import {HttpHeaders, HttpClient } from "@angular/common/http";
import { Employee } from "../app/employee";
@Injectable({
  providedIn: 'root'
})
export class EmprecordService {
  Url="https://localhost:5001/api/employee";
  constructor(private http:HttpClient) { }
  async GetEmployeeRecord():Promise<Observable<any>>  
  {  
    debugger;  
    var data = await this.http.get<any>(this.Url+"/GetAllEmployee").toPromise();
    return data;
  }
  DeleteEmployee(id:string):Observable<number>  
  {  
    debugger;  
    return this.http.get<number>(this.Url + '/Delete/?id='+id);  
  }
  async InsertEmployee(emp:Employee):Promise<Observable<any>>{
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return await this.http.post<any>(this.Url+'/InsertEmployee', emp,httpOptions).toPromise();  
  }
  async GetEmployeeById(id:string):Promise<Employee>
  {  
    debugger;
    return await this.http.get<Employee>(this.Url + '/GetEmployeeById/?id=' + id).toPromise(); 
  }
}
