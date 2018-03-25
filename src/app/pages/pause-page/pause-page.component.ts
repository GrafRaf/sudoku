import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store/model';

@Component({
  selector: 'app-pause-page',
  templateUrl: './pause-page.component.html',
  styleUrls: ['./pause-page.component.css']
})
export class PausePageComponent implements OnInit {

  @select(state => state.game.level) level$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
