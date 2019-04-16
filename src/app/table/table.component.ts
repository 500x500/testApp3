import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {AppService} from '../services/app.service';

export interface AppService {
  name: string;
  dob: number;
  sex: string;
  snils: number;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['select', 'name', 'dob', 'sex', 'snils'];

  selection = new SelectionModel<AppService>(true, []);

  constructor(private dataSource: AppService) {
  }

  public get formArray$() {
    return this.dataSource.formArray$;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.formArray$.value.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.formArray$.value.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: AppService): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
