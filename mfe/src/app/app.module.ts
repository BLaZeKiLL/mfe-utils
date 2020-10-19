import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    HelloWorldComponent
   ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    HelloWorldComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector : Injector) { }

  ngDoBootstrap(appRef: ApplicationRef): void {
    customElements.define('hello-world', createCustomElement(HelloWorldComponent, {injector: this.injector}));
  }

}
