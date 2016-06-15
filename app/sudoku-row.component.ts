import { Component } from '@angular/core';
import { Cell } from './cell';
import { SudokuCellComponent } from './sudoku-cell.component';
@Component({
  selector: 'sudoku-row',
  directives:[SudokuCellComponent],
  template: 
`
<sudoku-cell *ngFor="let cell of cells"></sudoku-cell>
`
})
export class SudokuRowComponent { 
  cells: Cell[];
}