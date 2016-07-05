import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { TvWatchlistAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TvWatchlistAppComponent, [
    HTTP_PROVIDERS
]);

