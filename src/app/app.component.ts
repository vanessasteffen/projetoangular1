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
  res:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  onSubmit(form: any) {
    console.log(form);
    //console.log(form.value);
    //console.log(this.produto);

    this.http.post('https://httpbin.org/get', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados));
  }

  verificaValidTouched(campo:any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo:any){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}



