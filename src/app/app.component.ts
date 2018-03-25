import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from './store/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @select(state => state.game.level) level$: Observable<number>;

  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>) {}

}
