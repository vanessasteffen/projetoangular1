import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public databaseUrl = "http://crud-laravel.test/api/"

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(url: string, params: any) {
    return this.httpClient.get<any>(this.databaseUrl + url, {params: params})
      .pipe(tap(res => {
      }, (error => {
      })));
  }


  post(url: string, body: any) {
    return this.httpClient.post<any>(this.databaseUrl + url, body)
      .pipe(tap(res => {
      }, (error) => {
      }));
  }


  delete(url: string, params: any) {
    return this.httpClient.delete(this.databaseUrl + url, {params: params})
      .pipe(tap(resp => {
      }, error => {
      }));
  }

  put(url: string, body: any) {
    return this.httpClient.put(this.databaseUrl + url, body)
      .pipe(tap(resp => {
      }, error => {
      }));
  }
}
