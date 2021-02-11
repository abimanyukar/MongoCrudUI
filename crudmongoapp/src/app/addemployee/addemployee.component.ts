import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";  
import { FormGroup, FormControl } from '@angular/forms';  
import { EmprecordService } from "../emprecord.service";  
import { Employee } from "../employee";  
import { Observable } from "rxjs";  
import { identifierModuleUrl } from '@angular/compiler';  
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  massage: string;  
  dataSaved = false;  
  Addemployee:FormGroup;  
  Empdata:Employee;
  EmployeeIdUpdate = "0"; 
  constructor(private router: Router,private emprecordService:EmprecordService) { }
  async InsertEmployee(employee:Employee)  
      {  
    debugger;  
        if (this.EmployeeIdUpdate != "0") employee.id=this.EmployeeIdUpdate;  
          await this.emprecordService.InsertEmployee(employee).then(x=>{
            if (this.EmployeeIdUpdate == "0") {  
              this.massage = 'Saved Successfully';  
              this.dataSaved = true; 
            }
            else{
              this.massage = 'updated Successfully';  
              this.dataSaved = true; 
            }  
          });
          this.router.navigate(['/employee']);  
          
      }  
      onFormSubmit() {
        debugger;  
        const Emp = this.Addemployee.value;  
        this.InsertEmployee(Emp);  
      } 
      async EmployeeEdit(id: string){  
        debugger;  
        
        var emp = await this.emprecordService.GetEmployeeById(id).then(x=>{
          this.Empdata= <Employee> x;
          this.massage = null;  
          this.dataSaved = false;  
          debugger;  
          this.EmployeeIdUpdate=id;  
          this.Addemployee.controls['Name'].setValue(this.Empdata.name);  
          this.Addemployee.controls['Department'].setValue(this.Empdata.department);  
          this.Addemployee.controls['City'].setValue(this.Empdata.city);  
          this.Addemployee.controls['Age'].setValue(this.Empdata.age);  
          this.Addemployee.controls['Technology'].setValue(this.Empdata.technology); 
        });
        /*.subscribe(emp => {  
          this.massage = null;  
          this.dataSaved = false;  
          debugger;  
          this.EmployeeIdUpdate=id;  
          this.Addemployee.controls['Name'].setValue(emp.Name);  
          this.Addemployee.controls['Department'].setValue(emp.Department);  
          this.Addemployee.controls['Address'].setValue(emp.Address);  
          this.Addemployee.controls['Age'].setValue(emp.Age);  
          this.Addemployee.controls['Technology'].setValue(emp.Technology);  
        });
        */  
        debugger;  
      }  
      clearform() {  
        debugger;  
        this.Addemployee.controls['Name'].setValue("");  
        this.Addemployee.controls['Department'].setValue("");  
        this.Addemployee.controls['Age'].setValue("");  
        this.Addemployee.controls['City'].setValue("");  
        this.Addemployee.controls['Technology'].setValue("");  

      }  
  ngOnInit(): void {
    debugger;
    this.Addemployee = new FormGroup({  
      Name: new FormControl(),  
      Department:new FormControl(),  
      Age:new FormControl(),  
      City:new FormControl(),  
      Technology:new FormControl(),  
    });  
    let Id = localStorage.getItem("id"); 
    if(Id!=null)  
    {  
      this.EmployeeEdit(Id);  
    }
  }

}
