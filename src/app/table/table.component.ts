import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {AppService} from '../services/app.service';

export interface AppService {
  name: string;
  dob: number;
  sex: string;
  snils: number;
}

// const USER_DATA: formArray = [
//       {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//     ];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'dob', 'sex', 'snils'];

  //selection = new SelectionModel<formArray>(true, []);

  constructor(private dataSource: AppService) {}
  formArray = this.dataSource.formArray;


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: formArray): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
 }
