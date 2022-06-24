import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produto: any = {
    name: null,
    size: null,
    price: null,
    description: null,

  }
  res: any;
  private form: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  onSubmit(formulario: any) {
    console.log(formulario);
    //console.log(form.value);
    //console.log(this.produto);

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe((dados: any) => {
          console.log(dados);
          //reseta o formulario
          formulario.form.reset();
        },
        (error: any) => alert('erro'));

  }

  resetar() {
    this.form.reset();
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}



