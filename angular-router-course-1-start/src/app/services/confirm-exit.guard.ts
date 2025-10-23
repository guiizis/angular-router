import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<any> {
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    return component.confirmExit();
  }

}
