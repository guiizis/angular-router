import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";
import { first } from "rxjs/operators";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private courseService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {
    return this.courseService.loadLessonDetail(route.params['courseUrl'], route.params['lessonSeqNo']).pipe(
      first()
    );
  }
}
