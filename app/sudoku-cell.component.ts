import { Component } from '@angular/core';
import { Cell } from './cell';

@Component({
  selector: 'sudoku-cell',
  template: 
`
<span>{{cell.userValue}}</span>
`
})
export class SudokuCellComponent {
    cell: Cell;
}