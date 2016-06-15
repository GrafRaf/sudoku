import { Component } from '@angular/core';
import { SudokuRowComponent } from './sudoku-row.component';

@Component({
  selector: 'sudoku-board',
  directives:[SudokuRowComponent],
  styles:[
    ".row {display: inline-block}",
    ".cell { padding: 5px; cursor: pointer}",
    ".cell:hover {background: yellow}"
  ],
  template: 
`
<div>Board</div>
<div class='row' *ngFor="let row of rows">
<div class='cell' *ngFor="let col of cols">
<span>{{row}}:{{col}}</span>
</div>
</div>
<div class='cell' *ngFor="let number of numbers"><a>{{number}}</a></div>
`
})
export class SudokuBoardComponent { 
  //cells: Cell[][];
  rows: Number[] = [0,1,2,3,4,5,6,7,8];
  cols: Number[] = [0,1,2,3,4,5,6,7,8];
  numbers: Number[] = [1,2,3,4,5,6,7,8,9];
}