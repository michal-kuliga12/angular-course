import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Course/:id', component: CourseComponent },
  // { path: 'Courses/Course/:id/:name/:date', component: CoursesComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
