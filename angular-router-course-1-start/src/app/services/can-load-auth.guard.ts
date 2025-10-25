import { Injectable } from "@angular/core";
import { CanLoad, CanMatch, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthStore } from "./auth.store";
import { first, tap } from "rxjs/operators";

@Injectable()
export class CanLoadAuthGuard implements CanMatch {
  constructor(private auth: AuthStore, private router: Router) { };

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isLoggedIn$.pipe(
      first(),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
