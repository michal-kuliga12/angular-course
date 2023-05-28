export class Student {
  name: string;
  course: string;
  marks: number;
  DOB: Date;
  gender: string;
  constructor() {
    this.name = '';
    this.course = '';
    this.marks = 1;
    this.DOB = new Date();
    this.gender = '';
  }
}
