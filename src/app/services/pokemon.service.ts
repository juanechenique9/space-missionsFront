import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../src//environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = `${environment.apiUrl}`
   }


  getPokemonById(id: number): Observable<any> {
    return this.http.get<any>( `${this.urlApi}ability/${id}`);
  }

  getPokemonAll(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}pokemon/ditto`);
  }

  getPokemonGeneration(name: string): Observable<any> {
     return this.http.get<any>(`${this.urlApi}generation/${name}`)
  }
}
