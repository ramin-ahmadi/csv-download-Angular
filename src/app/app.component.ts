import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'csv';

  name = 'Angular 11';
  status: any[];
  formula:string = "Formula 1";
  downloadCSV() {
    this.status = ["Placed", "rejected", "pending"];
    var data = [
      {
        order: "0000490136",
        date: 'December 15, 2020',
        po: null,
        status: this.status[0],
        total: "$54.79"
      },
      {
        order: '0000490126',
        date: 'December 15, 2020',
        po: null,
        status: this.status[1],
        total: "$86.27"
      },
      {
        order: '0000490119',
        date: 'December 15, 2020',
        po: 12121212121212121212212,
        status: this.status[2],
        total: "$156.79"
      },
    ];

    var options = {
      title: 'User Details',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ['ORDER #', 'DATE', '	PO #', 'Status', 'TOTAL']
    };

    new ngxCsv(data, this.formula, options);
  }
}
