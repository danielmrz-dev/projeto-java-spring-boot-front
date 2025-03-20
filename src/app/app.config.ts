import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';
import { provideEnvironmentNgxMask } from 'ngx-mask';


registerLocaleData(localePt, "pt-BR");

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    {
      provide: DEFAULT_CURRENCY_CODE, 
      useValue: 'BRL' 
    },
    {
      provide: LOCALE_ID, 
      useValue: 'pt-BR' 
    }

  ]
};
