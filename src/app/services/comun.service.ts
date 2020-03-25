import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SERVICE_REST } from 'src/app/components/commons/app-util';                                  
import { FnParam } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: any, path): Observable<any> {
    let headers = new HttpHeaders();
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    });      
    return this.http.get(`${SERVICE_REST}api/`+path,{params: params});
  }    

  getTotal(path): Observable<any> {
    return this.http.get(`${SERVICE_REST}api/`+path);
  }

  getOtro(params: any, path): Observable<any> {
    return this.http.get(`${SERVICE_REST}api/`+path, {params: params});
  }

  getRoles(): Observable<any> {
    return this.http.get(`${SERVICE_REST}api/comun-tipos-roles`);
  }

  post(data:any, path): Observable<any> {
    return this.http.post(`${SERVICE_REST}api/`+path,data);
  }
  
  put(data: any, path): Observable<any> {
    return this.http.put(`${SERVICE_REST}api/`+path,data);


  }

  delete(data: any, path): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(data).forEach(function (key) {
      httpParams = httpParams.append(key, data[key]);
    });
    return this.http.delete(`${SERVICE_REST}api/`+path, {params: data});
  }
}
