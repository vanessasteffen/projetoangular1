import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) {
  }

  getTamanhos() {
    return this.http.get('assets/dadosTamanho/tamanhosCalcados.json')
      map((res: Response) => res.json());
  }
  // getClientes(){
  //   return this.http.get('assets/dadosTamanho/idClientes.json')
  //   map((res: Response) => res.json());
  // }
}
