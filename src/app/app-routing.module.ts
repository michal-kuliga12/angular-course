import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';

import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  {
    path: 'Contact',
    canDeactivate: [CanDeactivateGuardService],
    component: ContactComponent,
  },
  {
    path: 'Courses',
    resolve: { courses: CourseResolveService },
    component: CoursesComponent,
  },
  // { path: 'Courses/Course/:id', component: CourseComponent },
  {
    path: 'Courses',
    children: [
      {
        path: 'Course/:id',
        canActivate: [CourseGuardService],
        component: CourseComponent,
      },
    ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
