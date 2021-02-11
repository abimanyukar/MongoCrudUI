import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";  
import { EmprecordService } from "../emprecord.service";  
import { Observable } from "rxjs";  
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public emp: Observable<Employee[]>; 
  message:String;  
  dataSaved=false;
  public filter:string;
  public p=1;
  
  constructor(private router: Router,private emprecordService:EmprecordService) { }
  async Loademployee()  
  {        
    debugger;  
    var dt = await this.emprecordService.GetEmployeeRecord().then(x=>this.emp=x);  
    console.log(this.emp); 
    debugger;  
  } 
  Deleteemployee(id: string) {  
    if (confirm("Are You Sure To Delete this Informations")) {  

      this.emprecordService.DeleteEmployee(id).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = "Deleted Successfully";  
        }  
      );  
       
    }  
    this.router.navigate(['/employee']);
  }  
  async ngOnInit(): Promise<void> {
    localStorage.clear();
    await this.Loademployee();
  }
  EmployeeEdit(id: string) {  
  debugger;  
  localStorage.removeItem("id");  
  localStorage.setItem("id",id.toString());  
  this.router.navigate(['/addemployee'], { queryParams: { Id: id } });  
  debugger; 
  }  
}
