import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;

  constructor(
    private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.http.delete('http://crud-laravel.test/api/produto/' + id, {}
    ).subscribe((dados: any) => {
        console.log(dados);
      },
      (success: any) => location.reload());
    console.log(this.http);
  }
}
