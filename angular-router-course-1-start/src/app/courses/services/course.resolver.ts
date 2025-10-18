import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { first } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolver implements Resolve<Course>{

  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
      return this.coursesService.loadCourseByUrl(route.params['courseUrl']).pipe(
        first()
      );
    }
}
