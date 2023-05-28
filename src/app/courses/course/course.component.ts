import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, OnDestroy {
  constructor(
    private service: CoursesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // Definiujemy właściwości i ich typy
  course: any; //
  courseId: any;
  RouteParamObs: any;
  editMode: boolean = false;

  ngOnInit(): void {
    this.RouteParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find((x) => x.id == this.courseId);
    });
    // Przechwytujemy parametr query za pomocą
    // 1. Snapshot - zły sposób
    // this.editMode = Boolean(
    //   this.activatedRoute.snapshot.queryParamMap.get('edit')
    // );
    // 2. Observable
    this.activatedRoute.queryParamMap.subscribe((param) => {
      console.log(param);
      this.editMode = Boolean(param.get('edit'));
    });
    // Ponieważ zasubskrybowaliśmy observable, każda zmiana parametru powoduje wywołanie funkcji i edycje zmiennej editMode
  }
  ngOnDestroy(): void {
    this.RouteParamObs.unsubscribe();
  }
  // Tworzymy metodę, która przekieruje po naciśnięciu przycisku dodając parametr query edit=true
  appendQueryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], {
      queryParams: { edit: true },
    });
  }
}
