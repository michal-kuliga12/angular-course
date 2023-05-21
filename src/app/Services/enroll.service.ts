// Service - jest  to funkcja, którą można używać w wielu miejscach aplikacji. W klasach, które nie mają między sobą żadnej relacji rodzic-dziecko
export class EnrollService {
  OnEnrollClicked(title: string) {
    alert('Thank you for enrolling to ' + title + ' course');
  }
}
