// Required by Angular2.
import 'reflect-metadata';
import 'zone.js'; //https://github.com/angular/angular/issues/4288
import 'babel-core/polyfill';

import { Component, View, bootstrap } from 'angular2/angular2'
import App from './components/app/app.js'
import PdfViewer from './components/pdf-viewer/pdf-viewer.js'

import {ROUTER_BINDINGS,RouteConfig  } from 'angular2/router';

@Component({
  selector: 'main'
})

@RouteConfig([
  { path: '/', as:'Root', component: PdfViewer },
  { path: '/share/:type/:id', as:'Share', component: PdfViewer }
])
@View({
  directives: [App],
  template: `
    <app></app>
  `
})

class Main {
  constructor(){
    console.log(' APP IS ',PdfViewer)
  }
}

bootstrap(Main,[ROUTER_BINDINGS]).catch((e)=>{
  console.warn('Error',e.message);
  console.log('Stacktrace : ')
  console.info(e.stack)

})
