import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bolsasweb';

  constructor(private router: Router) { }

  public get appLogo$(): Observable<{ name: string, path: string}> {
    return of({
      name: environment.appName,
      path: `./../assets/${environment.appLogo}`
    });
  }
  public get appTitle$(): Observable<string> {
    return of(environment.appName);
  }

  public onLogout(): void {
    this.router.navigate(['bemvindo']);
  }
}
