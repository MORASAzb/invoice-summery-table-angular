import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  cost: number | string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatTableModule,
    CurrencyPipe,
    CdkTableModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


  export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    displayedColumns: string[] = ['name', 'cost'];

    dataSource = new MatTableDataSource<PeriodicElement>([
      { name: 'مجموع مبلغ قبل از کسر', cost: '500000' },
      { name: 'مجموع مالیات بر ارزش افزوده', cost: '1000000' },
      { name: 'مجموع تخفیفات', cost: '' },
      { name: 'مجموع سایر مالیات،عوارض و وجوه قانونی', cost: '' },
      { name: 'مجموع مبلغ پس از کسر تخفیفات', cost: '' },
      { name: 'مجموع صورتحساب', cost: '' },
    ]);

    updateCosts(costs: number[]) {
      this.dataSource.data.forEach((element, index) => {
        if (costs[index] !== undefined) {
          element.cost = costs[index];
        }
      });
    }

    formatCurrency(value: number): string {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }



//   // delete line 56 to 121

// import { Component } from '@angular/core';
// import { CurrencyPipe } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
// import { CdkTableModule } from '@angular/cdk/table';
// import { MatTableDataSource } from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   cost: number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'مجموع مبلغ قبل از کسر', cost: 0 },
//   { name: 'مجموع مالیات بر ارزش افزوده', cost: 0 },
//   { name: 'مجموع تخفیفات', cost: 0 },
//   { name: 'مجموع سایر مالیات،عوارض و وجوه قانونی', cost: 0 },
//   { name: 'مجموع مبلغ پس از کسر تخفیفات', cost: 0 },
//   { name: 'مجموع صورتحساب', cost: 0 },
// ];

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     MatTableModule,
//     CurrencyPipe,
//     CdkTableModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   displayedColumns: string[] = ['name', 'cost'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

//   onCostInputChange(event: Event, index: number) {
//     const input = event.target as HTMLInputElement;
//     const newValue = parseFloat(input.value);

//     if (!isNaN(newValue)) {
//       this.updateCost(index, newValue);
//     }
//   }

//   // updateCost(index: number, newValue: number) {
//   //   this.dataSource.data = this.dataSource.data.map((element, i) => {
//   //     if (i === index) {
//   //       return { ...element, cost: newValue };
//   //     }
//   //     return element;
//   //   });
//   // }

//       updateCosts(costs: number[]) {
//       this.dataSource.data.forEach((element, index) => {
//         if (costs[index] !== undefined) {
//           element.cost = costs[index];
//         }
//       });
//     }

//     formatCurrency(value: number): string {
//       return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     }
// }
