import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  NoPreloading,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withPreloading,
} from '@angular/router';
import {
  IgxButtonModule,
  IgxCardModule,
  IgxExpansionPanelModule,
  IgxForOfModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxLayoutModule,
  IgxListModule,
  IgxNavbarModule,
  IgxPaginatorModule,
  IgxRippleModule,
  IgxSelectModule,
} from 'igniteui-angular';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideRouter(appRoutes, withPreloading(NoPreloading)),
    importProvidersFrom(
      BrowserModule,
      IgxNavbarModule,
      IgxIconModule,
      IgxButtonModule,
      IgxCardModule,
      ReactiveFormsModule,
      IgxSelectModule,
      IgxInputGroupModule,
      IgxRippleModule,
      IgxForOfModule,
      IgxListModule,
      IgxPaginatorModule,
      IgxExpansionPanelModule,
      IgxLayoutModule
    ),
    provideAnimations(),
    provideHttpClient(),
  ],
};
