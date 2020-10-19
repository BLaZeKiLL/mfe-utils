import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { loadBundle } from '@codeblaze/mfe-utils';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

loadBundle('http://localhost:3200/main.js');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));