import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  columnDefs = [{ field: "тип", width: 90 }, { field: "серия", width: 90 }, { field: "номер", width: 150 }];

  rowData = [
    { тип: "Toyota", серия: "Celica", номер: 35000 },
    { тип: "Ford", серия: "Mondeo", номер: 32000 },
    { тип: "Porsche", серия: "Boxter", номер: 72000 }
  ];
}
