import { Component } from '@angular/core';
import { SudokuBoardComponent } from './sudoku-board.component';
import { Cell } from './cell';

@Component({
  selector: 'my-app',
  template:
`<div>
  <h1>Sudoku app</h1>
  <sudoku-board [board]="board">Loading board ...</sudoku-board>
</div>`,
 directives: [SudokuBoardComponent]
})

export class AppComponent { 
  board: Array<Cell>;

  init(){
    this.board = new Cell[10][10];
    for (var row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        let element = new Cell();
        element.originalValue = null;
        element.userValue = null;
        element.y = row;
        element.x = col;
        this.board[row][col] = element;
        //element.x =       
      }
    }
  }
}
