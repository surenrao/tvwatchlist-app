/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TvWatchlistAppComponent } from './tv-watchlist-app.component';

beforeEachProviders(() => [TvWatchlistAppComponent]);

describe('App: TvWatchlist', () => {
  it('should create the app',
      inject([TvWatchlistAppComponent], (app: TvWatchlistAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([TvWatchlistAppComponent], (app: TvWatchlistAppComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
