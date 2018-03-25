import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer } from './store/reducers';

import { AppComponent } from './app.component';
import { IAppState } from './store/model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension) {

    let enhancers = [];
    // TODO: replace implementation
    const __DEVMODE__ = true;
    const initialState = { game: { level: 1 }, router: null };

    // You probably only want to expose this tool in devMode.
    if (__DEVMODE__ && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(rootReducer, initialState, [], enhancers);
  }
}
