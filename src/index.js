import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {App} from 'components/app/app';

@Component({
  selector: 'main'
})

@View({
  directives: [App],
  template: `
    <app></app>
  `
})

class Main {

}

bootstrap(Main);
