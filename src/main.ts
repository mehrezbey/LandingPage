import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(ele => {
        const windowheight = window.innerHeight;
        const revealtop = ele.getBoundingClientRect().top;
        const revealpoint = 10;
        (revealtop < windowheight - revealpoint) ? ele.classList.add("active") : ele.classList.remove("active");
    });
})
