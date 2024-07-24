import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { tokenInterceptor } from './interceptors/tokenInterceptor';


export const appConfig: ApplicationConfig = {


  providers: [
    provideHttpClient(
      withInterceptors([tokenInterceptor]),
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    importProvidersFrom(MessageService),
    importProvidersFrom(ToastModule), provideAnimationsAsync(), provideAnimationsAsync(),


  ],


};

