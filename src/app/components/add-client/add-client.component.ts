import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  columnDefs = [{ field: "тип", width: 90 }, { field: "серия", width: 90 }, { field: "номер", width: 150 }];

  isupdated = false;

  ngOnInit() {
    this.isupdated=false; 
  }

  studentupdateform=new FormGroup({  
    student_id:new FormControl(),  
    student_name:new FormControl(),  
    student_email:new FormControl(),  
    student_branch:new FormControl()  
  });  

  rowData = [
    { тип: "Toyota", серия: "Celica", номер: 35000 },
    { тип: "Ford", серия: "Mondeo", номер: 32000 },
    { тип: "Porsche", серия: "Boxter", номер: 72000 }
  ];
}
