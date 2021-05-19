import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

window.onload = () => {
  let docStyle = document.documentElement.style;
  docStyle.setProperty("--main-text-color", "#FFF")
  docStyle.setProperty("--main-bg-color", "#66ACA8")
  docStyle.setProperty("--primary-button-color", "#CA9100")
  docStyle.setProperty("--primary-button-color-hover", "#c08a00")
  docStyle.setProperty("--primary-button-color-active", "#d69b04")
  docStyle.setProperty("--primary-button-text-color", "#FFF")
  docStyle.setProperty("--secondary-button-color", "#172A3A")
  docStyle.setProperty("--secondary-button-color-hover", "#080f14")
  docStyle.setProperty("--secondary-button-color-active", "#162835")
  docStyle.setProperty("--secondary-button-text-color", "#FFF")
  docStyle.setProperty("--dropdown-color", "#f9f9f9")
  docStyle.setProperty("--morse-input-color", "#FFF")
  docStyle.setProperty("--morse-input-text-color", "#000")
}