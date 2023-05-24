import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  GoToHome() {
    // ŚCIEŻKA ABSOLUTNA:
    // this.router.navigateByUrl('Home');
    // this.router.navigate(['Home']);
    //
    // ŚCIEŻKA RELATYWNA:
    this.router.navigate(['Home'], { relativeTo: this.activatedRoute });
  }
}
