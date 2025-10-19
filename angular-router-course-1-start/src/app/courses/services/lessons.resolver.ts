import { Injectable } from "@angular/core";
import { LessonSummary } from "../model/lesson-summary";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { CoursesService } from "./courses.service";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {

  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> {
    return this.coursesService.loadAllCourseLessonsSummary(route.params['courseUrl']).pipe(
      first()
    );
  }
}
