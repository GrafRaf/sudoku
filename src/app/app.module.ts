import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer } from './store/reducers';
import { NgReduxRouterModule } from '@angular-redux/router';

import { AppComponent } from './app.component';
import { IAppState } from './store/model';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgReduxRouterModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    PagesModule
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
