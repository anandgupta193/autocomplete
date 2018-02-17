import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../routes/environments/environment';

@Injectable()
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  getDogBreedsList () {
    return this.http.get(environment.dogsBreed);
  }

}
