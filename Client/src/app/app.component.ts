import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { stepper} from './route-animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ]
})
export class AppComponent {
  title = 'Bug Tracker App';
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    
  }
}
