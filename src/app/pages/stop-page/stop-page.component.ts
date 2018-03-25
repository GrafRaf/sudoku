import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../store/model';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stop-page',
  templateUrl: './stop-page.component.html',
  styleUrls: ['./stop-page.component.css']
})
export class StopPageComponent implements OnInit {

  @select(state => state.game.level) level$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
