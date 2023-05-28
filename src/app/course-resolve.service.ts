import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CoursesService } from './Services/courses.service';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class CourseResolveService {
  constructor(private courseService: CoursesService) {}
  // resolveGetCourses(courses: any) {
  //   return courses;
  // }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.courseService.getAllCourses().then((data: any) => {
      return data;
    });
  }
}
// W dokumentacji mniej więcej tak to wygląda
// export const resolver: ResolveFn<any> = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   return inject(CourseResolveService).resolveGetCourses(courseService.getAllCourses())
// };
