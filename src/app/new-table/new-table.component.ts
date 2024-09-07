import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import {MatTableModule, MatTextColumn } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  cost: number | string;
}

@Component({
  selector: 'app-new-table',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatDivider,
    MatTextColumn,
    MatTableModule,
    MatToolbar,
    CommonModule,
    MatButtonModule,
  
    
  ],
  templateUrl: './new-table.component.html',
  styleUrl: './new-table.component.scss'
})
export class NewTableComponent {

  showSummary: boolean = false;

  toggleSummary(): void {
    this.showSummary = !this.showSummary;
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

  formatCurrency(value: number|string): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
