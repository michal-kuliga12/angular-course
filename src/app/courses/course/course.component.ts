import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  // Tworzymy instancje serwisu i klasy odpowiadającej aktywnemu przekierowaniu (route'owi)
  constructor(
    private service: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {}

  // Definiujemy właściwości i ich typy
  course: any; //
  courseId: number = 0;

  ngOnInit(): void {
    // Przechwytujemy id z parametru ścieżki i przypisujemy do właściwości courseId, możemy to zrobić na kilka sposobów
    //this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
    this.courseId = this.activatedRoute.snapshot.params['id'];
    //
    // Następnie znajdujemy obiekt w macierzy z serwisu, którego id odpowiada parametrowi id ze ścieżki
    this.course = this.service.courses.find((x) => x.id == this.courseId);
  }
}
